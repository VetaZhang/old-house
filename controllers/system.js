const UserModel = require('db/user');

const initdb = function(req, res) {
  UserModel.findOne({
    username: 'admin',
    authority: 'admin',
  }).then(user => {
    if (user) {
      return {
        message: 'Admin 账户已存在',
        error: 'Admin has exist',
      };
    } else {
      UserModel.create({
        username: 'admin',
        password: '123456',
        authority: 'admin',
      });
      return { data: '初始化成功' };
    }
  }).then(({ data, message, error }) => {
    if (data) {
      res.send(data);
    } else {
      res.error(message);
    }
  }).catch(error => {
    res.error('初始化失败');
  });
};

module.exports = {
  initdb
};