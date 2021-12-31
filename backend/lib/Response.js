
const ResErrorConfig = {
  unknown: '未知错误',
  usernameExisted: '用户名已存在',
  incorrectPwd: '密码不正确',
  wrongParam: '参数不正确',
};

class Response {
  constructor(data = null, errorKey = '') {
    this.ok = !errorKey;
    this.data = data;
    this.error = ResErrorConfig[errorKey] || errorKey || null;
  }
}

module.exports = Response;