const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false }
})

module.exports = User = mongoose.model("users", UserSchema);