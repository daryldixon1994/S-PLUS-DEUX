const Post = require("../../models/post");
const User = require("../../models/user");
exports.editPost = async (req, res) => {
    try {
        let body = req.body;
        let id = req.header("data");
        await Post.findByIdAndUpdate(id, {
            $set: { ...body },
        });
        let updatedPost = await Post.findById(id);
        res.status(201).json({
            status: true,
            message: "Post was updated successfully",
            data: updatedPost,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
