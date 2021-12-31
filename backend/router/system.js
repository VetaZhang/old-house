
const systemControllers = require('controllers/system');

const registrySystemApi = function(app) {
  app.post('/api/system/initdb', systemControllers.initdb);
};

module.exports = registrySystemApi;