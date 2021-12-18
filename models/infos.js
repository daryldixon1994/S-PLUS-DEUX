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
        },
        occupation: {
            type: "string",
        },
    },
    { timestamps: true }
);

module.exports = Infos = mongoose.model("infos", InfosSchema);
