const moduleAlias = require('module-alias');

const rootDir = process.cwd();

moduleAlias.addAliases({
  '@router': `${rootDir}/router`,
  '@controller': `${rootDir}/controller`,
  '@db': `${rootDir}/db`,
  '@lib': `${rootDir}/lib`,
  '@util'  : `${rootDir}/util`,
  '@config'  : `${rootDir}/config`,
  '@https'  : `${rootDir}/https`,
});
