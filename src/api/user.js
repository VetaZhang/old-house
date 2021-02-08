import { request } from './index';

const login = function(username, password) {
  return Promise.resolve();
  return request({
    method: 'post',
    url: '/login',
    data: {
      username,
      password,
    },
  })
};

export default {
  login,
};