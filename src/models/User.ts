import mongoose from "./mongoose";

const Schema = mongoose.Schema;

// 创建一个文档约束
export const UserSchema = new Schema({
    name: String,
    age: Number,
    sons: {
        type: String,
        default: "female",
    },
});

export const UserModel = mongoose.model("User", UserSchema);
