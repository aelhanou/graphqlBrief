import { Schema, model } from "mongoose"

const userSchema = new Schema(
    {
        fullName: {type: String},
        email: {type: String},
        password: {type: String},
    },
    { timestamps: true }
)

export const userModel = model("User", userSchema);

