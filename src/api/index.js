import axios from 'axios';
import { domain } from 'config/ipConfig';

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
    console.log(res);
  }).catch(error => {
    console.log(error);
  });
}

export {
  request
};