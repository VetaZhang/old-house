require('./utils/moduleAlias');
// require('db');
const Koa = require('koa');
const router = require('./routers');

const app = new Koa();

// app.use(async (ctx, next)=> {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
//   ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   if (ctx.method == 'OPTIONS') {
//     ctx.body = 200; 
//   } else {
//     await next();
//   }
// });

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log("Listening on:", port);
});
