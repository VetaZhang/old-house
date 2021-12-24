const UserModel = require('db/user');

const login = function(req, res) {
  const { body, query } = req;
  console.log(body);
  return res.json(body);
  UserModel.findOne({ username: body.username }).then(user => {
    if (user.password === body.password) {
      //
    }
  }).catch(error => {
    //
  });
}

module.exports = {
  login,
};