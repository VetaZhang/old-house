const Router = require('koa-router');
const fileRouter = require('./file');
const userRouter = require('./user');
const Validator = require('@lib/Validator');
const Response = require('@lib/Response');
const Env = require('@config/env');

const routerConfigList = [
  ...fileRouter,
  ...userRouter
];

function initRouter() {
  const router = new Router();

  routerConfigList.forEach(routerConfig => {
    const { method, path, auth = true, cors, handler, paramRules = [] } = routerConfig;

    if (router[method]) {
      router[method](path, async ({ request, response }, next) => {
        // 登录验证
        if (auth) {
          //
        }

        // 参数校验
        if (paramRules) {
          const param = Object.assign({}, request.query, request.body);
          const validator = new Validator(param, paramRules);

          const result = validator.valid();
          if (result.error) {
            response.body = new Response(null, result.error);
            return;
          }
        }

        // 接口逻辑
        if (handler) {
          await handler({ req: request, res: response });
        }

        // 跨域处理
        const shouldSetCORS = Env.isNotProd || cors;
        if (shouldSetCORS) {
          response.set({
            "Access-Control-Allow-Origin": "http://localhost:8000",
            "Access-Control-Allow-Methods": "OPTIONS, GET, PUT, POST, DELETE",
            "Access-Control-Allow-Headers": "x-requested-with, accept, origin, content-type"
          });
        }

      });
    } else {
      console.error(`The method ${method} is invalid for api ${path}`);
    }
  });

  return router;
}

module.exports = initRouter();