import mongoose from "mongoose";

/**
 * 提供连接数据库的功能
 * @param dbUrl: 数据库的url
 * @param maxConnectTime: 最大尝试连接的次数
 */
export let connect = (dbUrl: string, maxConnectTime = 5) => {
    let connectTimes = 0;
    return new Promise((resolve, reject) => {
        // if (mongoose.connection.states === mongoose.ConnectionStates.connected) {
        //     return resolve();
        // }

        if (process.env.NODE_ENV !== "production") {
            mongoose.set("debug", true);
        }

        // 这是个异步行为，外界如何判断它是否连接了呢》我调用Create方法的时候？
        mongoose.connect(dbUrl);

        mongoose.connection.on("disconnected", () => {
            if (connectTimes < maxConnectTime) {
                mongoose.connect(dbUrl);
                connectTimes++;
            } else {
                throw new Error("无法连接到数据");
            }
        });

        mongoose.connection.on("error", (err) => {
            console.error("连接错误");
            reject(err);
        });

        mongoose.connection.on("open", () => {
            console.log("已经连接到数据：" + dbUrl);
            resolve();
        });
    });
};
