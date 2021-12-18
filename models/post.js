const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
        },
        image: {
            type: "string",
        },
        firstName: {
            type: "string",
        },
        lastName: {
            type: "string",
        },
        phone: {
            type: "number",
            required: true,
        },
        type: {
            type: "string",
            required: true,
        },
        purpose:{
            type: "string",
            required: true
        },
        city: {
            type: "string",
            required: true,
        },
        delegation: {
            type: "string",
            required: true,
        },
        adresseOne: {
            type: "string",
            required: true,
        },
        adresseTwo: {
            type: "string",
            required: false,
        },
        surface: {
            type: "number",
            required: true,
        },
        rooms: {
            type: "number",
            required: true,
        },
        price: {
            type: "number",
            required: true,
        },
        photos: {
            type: ["string"],
        },
        isReported: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = Posts = mongoose.model("posts", PostSchema);
