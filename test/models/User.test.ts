import UserModel from "../../src/models/User";

describe("用户模型", () => {
    it("创建用用户", async () => {
        const result = await UserModel.create({});

        console.log(result);
        expect(result._id).not.toBeNull();
    });

    /**
     * 这种情况下胡直接抛出异常、可以没办法做类型检查
     */
    it("创建用用户，字段类型和Schema中不吻合", async () => {
        try {
            const result = await UserModel.create({
                name: "Jon1",
                age: "age",
            });
        } catch (e) {
            console.log(e);
        }
    });

    /**
     * Schema中不存在字段a，所以它会被自动忽略
     */
    it("创建用用户，携带Schema中不存在的字段", async () => {
        const result = await UserModel.create({
            name: "Jack1",
            a: 123,
        });

        console.log(result);
        // @ts-ignore
        expect(result.a).toBeUndefined();
    });
});
