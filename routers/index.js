const registrySystemApi = require('./system');
const registryUserApi = require('./user');

const registryApiRouter = function(app) {
  registrySystemApi(app);
  registryUserApi(app);
};

module.exports = registryApiRouter;