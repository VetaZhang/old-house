const file = require('../controllers/file');

module.exports = [
  {
    method: 'get',
    path: '/file/upload',
    auth: 'true',
    cors: true,
    handler: file.upload
  }
];