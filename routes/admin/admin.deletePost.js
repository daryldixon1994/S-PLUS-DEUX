const Post = require("../../models/post");
module.exports = async (req, res) => {
    try {
        let _id = req.header("data");
        let deletedPost = await Post.findByIdAndRemove(_id);
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
