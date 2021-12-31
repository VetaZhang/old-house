const UserModel = require('@db/user');
const Response = require('@lib/Response');

async function register({ req, res }) {
  const { username, password } = req.body || {};
  const user = await UserModel.findOne({ username });

  if (user) {
    res.body = new Response(null, 'usernameExisted');
    return;
  }

  if (!(username && username.length >= 4 && password && password.length >= 6)) {
    res.body = new Response(null, '参数不正确');
    return;
  }

  await UserModel.create({ username, password });
  res.body = new Response();
}

async function login({ req, res }) {
  const { username, password } = req.body || {};
  // res.body = JSON.stringify(body);
  // UserModel.findOne({ username: body.username }).then(user => {
  //   if (user.password === body.password) {
  //     //
  //   }
  // }).catch(error => {
  //   //
  // });
}

module.exports = {
  login,
  register
};