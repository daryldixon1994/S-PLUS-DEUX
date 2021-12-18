const Post = require("../../../models/post");
const User = require("../../../models/user");
module.exports = async (req, res) => {
    try {
        let id = req.header("data");
        await Post.findByIdAndUpdate(id, {
            $set: { isReported: true },
        });
        let reportedPost = await Post.findById(id);
        res.status(201).json({
            status: true,
            message: "This post was reported",
            data: reportedPost,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
