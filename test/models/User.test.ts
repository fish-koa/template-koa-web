import {UserModel} from "../../src/models/User";

describe("用户模型", () => {
    it("创建用用户", async () => {
        const result = await UserModel.create({});

        console.log(result);
        expect(result._id).not.toBeNull();
    });
});
