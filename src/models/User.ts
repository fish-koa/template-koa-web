import mongoose from "./mongoose";

export const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

export interface IUser extends mongoose.Document {
    name: string;
    age: number;
}

const UserModel = mongoose.model<IUser>("User", UserSchema);
export default UserModel;
