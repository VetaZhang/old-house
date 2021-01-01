const moduleAlias = require('module-alias');

const rootDir = process.cwd();

moduleAlias.addAliases({
  'db': `${rootDir}/db`,
  'routers': `${rootDir}/routers`,
  'controllers': `${rootDir}/controllers`,
  'utils'  : `${rootDir}/utils`,
});
