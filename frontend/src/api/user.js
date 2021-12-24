import { request } from './index';

const login = function(username, password) {
  request({
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