const env = process.env.NODE_ENV || 'development';

module.exports = {
  isDev: env === 'development',
  isTest: env === 'test',
  isProd: env === 'production',
  isNotProd: env !== 'production'
};