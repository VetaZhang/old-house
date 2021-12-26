const fs = require('fs');
const path = require('path');

async function upload({ req, res }) {
  // console.log(req.files.file);
  const file = req.files.file;
  // res.body = { path: file.path }
  // const randomNum = Math.random().toString(36).slice(2) + Date.now().toString(36);

  // // 创建可读流
  // const reader = fs.createReadStream(file.path);
  // let filePath = path.join(__dirname, '../public/') + `${randomNum}_${file.name}`;
  // // 创建可写流
  // const upStream = fs.createWriteStream(filePath);
  // // 可读流通过管道写入可写流
  // reader.pipe(upStream);
  // return;
  // req.files.forEach(element => {
  //   const randomNum = Math.random().toString(36).slice(2) + Date.now().toString(36);

  //   // 创建可读流
  //   const reader = fs.createReadStream(file.path);
  //   let filePath = path.join(__dirname, '../public/') + `${randomNum}_${file.name}`;
  //   // 创建可写流
  //   const upStream = fs.createWriteStream(filePath);
  //   // 可读流通过管道写入可写流
  //   reader.pipe(upStream);
  // });

  res.status = 200;
  res.body = 'Hello World';
}

module.exports = {
  upload
};