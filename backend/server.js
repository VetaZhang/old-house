require('./utils/moduleAlias');
// require('db');
const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./routers');

const app = new Koa();

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 20*1024*1024,    // 设置上传文件大小最大限制，默认2M
    // 上传目录
    uploadDir: path.join(__dirname, './public/'),
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
