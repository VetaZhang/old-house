require('./util/moduleAlias');
const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
const Response = require('@lib/Response');
const router = require('@router');
require('@db');

const app = new Koa();

app.use(async(ctx, next) => {
  try {
    await next();
  } catch(error) {
    const errorMsg = error ? error.toString() : 'unknown';
    return ctx.body = new Response(null, errorMsg);
  }
});

app.use(async (ctx, next) => {
  if (ctx.method === 'OPTIONS') {
    // ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Origin", "http://localhost:8000");
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
    // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    // ctx.set("Access-Control-Allow-Credentials", true);

    // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
    // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
    // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
    // ctx.set("Access-Control-Max-Age", 300);

    /*
      CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。
      需要获取其他字段时，使用Access-Control-Expose-Headers，
      getResponseHeader('myData')可以返回我们所需的值
    */
    // ctx.set("Access-Control-Expose-Headers", "myData");
    ctx.status = 204;
    ctx.body = '';
  } else {
    await next();
  }
});

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024,    // 设置上传文件大小最大限制，默认2M
    // 上传目录
    // uploadDir: path.join(__dirname, './public/'),
    // 保留文件扩展名
    keepExtensions: true,
  }
}));

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log("Listening on:", port);
});
