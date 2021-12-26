const file = require('../controllers/file');

module.exports = [
  {
    method: 'post',
    path: '/file/upload',
    auth: 'true',
    cors: false,
    handler: file.upload
  }
];