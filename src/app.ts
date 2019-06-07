import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import koaStatic from "koa-static";
import views from "koa-views";
import path from "path";

import ejsRouter from "./routers/ejs";
import rootRouter from "./routers/root";
import usersRouter from "./routers/users";

const app = new Koa();

/**
 * 打印http请求和响应的时间
 */
app.use(logger());

/**
 * 配置模板引擎
 *   这里使用了ejs
 */
app.use(views(path.resolve(__dirname, "views"), {
    extension: "ejs",
    map: {
        html: "ejs",
    },
}));

/**
 * 配置静态资源目录
 */
app.use(koaStatic(path.resolve(__dirname, "static")));

/**
 * 解析请求体
 * 通过ctx.request.body拿到
 */
app.use(bodyParser());

app.use(rootRouter.routes());
app.use(ejsRouter.routes());
app.use(usersRouter.routes());

export default app;
