const file = require('@controller/file');

module.exports = [
  {
    method: 'post',
    path: '/file/upload',
    auth: true,
    cors: true,
    handler: file.upload
  },
];