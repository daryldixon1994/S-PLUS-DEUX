const Post = require("../../../models/post");
const User = require("../../../models/user");
module.exports = async (req, res) => {
    try {
        let _id = req.header("data");
        let { id } = req.params;
        let post = await Post.findById({ _id });
        if (post.user === id) {
            let deletedPost = await Post.findByIdAndRemove(_id);
            res.status(201).json({
                status: true,
                message: "Post was deleted successfully",
                data: deletedPost,
            });
        } else {
            res.status(401).json({ status: false, message: "not authorized" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
