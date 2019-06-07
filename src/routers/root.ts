import Router from "koa-router";

const router = new Router();

router.get("/", (ctx) => {
    ctx.body = "Hello World";
});

router.post("/", (ctx) => {
    ctx.body = ctx.request.body;
});

export default router;
