import Router from "koa-router";

const router = new Router();

router.get("/ejs", async (ctx) => {
    const title = "hello koa2";
    await ctx.render("index", {
        title,
    });
});

export default router;
