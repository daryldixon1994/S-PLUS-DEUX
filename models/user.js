const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        email: {
            type: "string",
            required: true,
        },
        password: {
            type: "string",
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isUser: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

module.exports = Users = mongoose.model("users", UserSchema);
