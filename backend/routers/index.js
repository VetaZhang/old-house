const Router = require('koa-router');
const fileRouter = require('./file');

const routerConfigList = [
  ...fileRouter,
];

function initRouter() {
  const router = new Router();

  routerConfigList.forEach(routerConfig => {
    const { method, path, auth = true, cors, handler } = routerConfig;

    if (router[method]) {
      router[method](path, async ({ request, response }, next) => {

        // 登录验证
        if (auth) {
          //
        }

        // 接口逻辑
        if (handler) {
          await handler({ req: request, res: response });
        }

        // 跨域处理
        if (cors) {
          // ctx.set('Access-Control-Allow-Origin', '*');
          // ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
          // ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
          // if (ctx.method == 'OPTIONS') {
          //   ctx.body = 200; 
          // } else {
          //   await next();
          // }
        }

      });
    } else {
      console.error(`The method ${method} is invalid for api ${path}`);
    }
  });

  return router;
}

module.exports = initRouter();