import Koa from "koa";
import koaStatic from "koa-static";
import views from "koa-views";
import path from "path";

import ejsRouter from "./routers/ejsRouter";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const app = new Koa();

/**
 * 配置模板引擎
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

app.use(rootRouter.routes());
app.use(ejsRouter.routes());
app.use(userRouter.routes());

export default app;
