import Router from "koa-router";
import UserModel from "../models/User";

const router = new Router();

router.prefix("/users");

router.get("/", async (ctx) => {
    const users = await UserModel.find({});

    await ctx.render("users", {
        users,
    });
});

router.get("/:name", async (ctx) => {
    const name = ctx.params.name;
    await UserModel.deleteMany({});

    const user = await UserModel.create({name});

    await ctx.render("user", {
        user,
    });
});

export default router;
