const fs = require('fs');
const path = require('path');

async function upload({ req, res }) {
  let fileList = req.files.file;

  if (!Array.isArray(fileList)) {
    fileList = [fileList];
  }

  fileList.forEach(file => {
    const randomNum = Math.random().toString(36).slice(2) + Date.now().toString(36);

    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, '../public/') + `${randomNum}_${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
  });
  
  res.status = 200;
  res.body = 'ok';
}

module.exports = {
  upload
};