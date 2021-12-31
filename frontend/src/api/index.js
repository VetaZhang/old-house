import axios from 'axios';
import { domain } from 'config/urlConfig';

const request = function(
  {
    method = 'get',
    url = '',
    data = {},
    contentType = 'application/json'
  } = {},
  {
    //
  } = {}
) {
  return axios({
    method,
    url: `${domain}${url}`,
    headers: {
      'Content-Type': contentType,
    },
    data,
  }).then(res => {
    return res.data;
  }).catch(error => {
    console.error(error);
  });
}

function upload({ url, file, onProgress }) {
  let formData = new FormData();
  let name = file.name;

  formData.append('file', file);

  return axios({
    method: 'post',
    url: url || `${domain}/file/upload`,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: progressEvent => {
      console.log(progressEvent);
      const progress = (progressEvent.loaded / progressEvent.total);
      onProgress && onProgress({
        name,
        progress
      });
    }
  })
}

function uploadMulti({ url, fileList, onProgress }) {
  if (!Array.isArray(fileList)) {
    fileList = Array.prototype.slice.call(fileList);
  }
  fileList.forEach(file => {
    upload({
      url,
      file,
      onProgress(fileWithProgress) {
        console.log(fileWithProgress);
        onProgress && onProgress([fileWithProgress]);
      }
    });
  })
}

export {
  request,
  upload,
  uploadMulti
};