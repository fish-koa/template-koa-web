import Router from "koa-router";

const router = new Router();

router.get("/session", (ctx) => {
    // ignore favicon
    if (ctx.path === "/favicon.ico") { return; }

    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = n + " views";
});

export default router;
