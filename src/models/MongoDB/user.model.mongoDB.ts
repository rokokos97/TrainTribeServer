import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "../../interfaces/user.interfaces.js";

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    image_url: { type: String, required: false },
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
    sports: [{ type: Schema.Types.ObjectId, ref: "Sport", required: true }],
    training_created: [{ type: Schema.Types.ObjectId, ref: "Training" }],
    training_join: [{ type: Schema.Types.ObjectId, ref: "Training" }]
  },
  {
    timestamps: true
  }
);

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
