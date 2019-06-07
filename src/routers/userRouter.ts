import Router from "koa-router";
import {UserModel} from "../models/User";

const router = new Router();

router.get("/users/:name", async (ctx) => {
    const user = await UserModel.create({name: ctx.params.name });

    await ctx.render("user", {
        user,
    });
});

export default router;
