const user = require('@controller/user');

module.exports = [
  {
    method: 'post',
    path: '/user/register',
    handler: user.register,
    // paramRules: [
    //   {
    //     key: 'username',
    //     type: 'string',
    //     length: [4, 12],
    //     regexp: /^[a-zA-Z][_0-9a-zA-Z]{3,}$/,
    //   },
    //   {
    //     key: 'password',
    //     type: 'string',
    //     length: [6, 12],
    //     regexp: /^[_0-9a-zA-Z]{6,12}$/,
    //   }
    // ],
  },
  {
    method: 'get',
    path: '/user/login',
    handler: user.login,
    // paramRules: [
    //   {
    //     key: 'username',
    //     type: 'string',
    //     length: [4, 12],
    //     regexp: /^[a-zA-Z][_0-9a-zA-Z]{3,}$/,
    //   },
    //   {
    //     key: 'password',
    //     type: 'string',
    //     length: [6, 12],
    //     regexp: /^[_0-9a-zA-Z]{6,12}$/,
    //   }
    // ],
  },
];