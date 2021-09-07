const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfosSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
        },
        firstName: {
            type: "string",
            required: true,
        },
        lastName: {
            type: "string",
            required: true,
        },
        photo: {
            type: "string",
            default: "/uploads/logo.png",
        },
        age: {
            type: "number",
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
        isReported: {
            type: Boolean,
            default: false,
        },
        phone: {
            type: "number",
            required: true,
        },
        city: {
            type: "string",
            required: true,
        },
        delegation: {
            type: "string",
            required: true,
        },
        gender: {
            type: "string",
            required: true,
        },
        occupation: {
            type: "string",
        },
    },
    { timestamps: true }
);

module.exports = Infos = mongoose.model("infos", InfosSchema);
