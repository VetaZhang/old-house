
const userControllers = require('controllers/user');

const registrySystemApi = function(app) {
  app.post('/api/user/login', userControllers.login);
};

module.exports = registrySystemApi;