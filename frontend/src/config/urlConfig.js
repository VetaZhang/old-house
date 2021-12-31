
const env = process.env.NODE_ENV || 'development';

const domainConfig = {
  development: 'http://localhost:3333',
  test: '',
  production: ''
};

const domain = domainConfig[env] || domainConfig.development;

export {
  domain
};