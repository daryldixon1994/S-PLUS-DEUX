const Post = require("../../models/post");
const User = require("../../models/user");
exports.deletePost = async (req, res) => {
    try {
        let id = req.header("data");
        let deletedPost = await Post.findByIdAndRemove(id);
        res.status(201).json({
            status: true,
            message: "Post was deleted successfully",
            data: deletedPost,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
