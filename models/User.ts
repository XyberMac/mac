import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: {type: String, requied: true},
    lastname: {type: String, requied: true},
    email: {type: String, requied: true},
    password: {type: String, requied: true},
    role: {type: String, default: "user"},
    image: {type: String},
    authProviderId: {type: String, requied: true},
})

export const User = mongoose.models?.User || mongoose.model("User", UserSchema)