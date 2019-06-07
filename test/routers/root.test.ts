import request from "supertest";

import app from "../../src/app";

describe("/", () => {
    it("get", async () => {
        const result = await request(app.callback()).get("/");
        console.log(result);
        expect(result.text).toEqual("Hello World");
        expect(result.status).toEqual(200);
    });

    it("post", async () => {
        const result = await request(app.callback())
            .post("/").send({name: "Jon"});
        console.log(result);

        expect(result.status).toEqual(200);
    });
});
