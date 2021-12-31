import { request } from './index';

const login = function(username, password) {
  return request({
    method: 'post',
    url: '/user/register?qwe=asd',
    data: {
      username,
      password,
    },
  })
};

export default {
  login,
};