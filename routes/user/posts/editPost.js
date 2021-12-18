const Post = require("../../../models/post");
module.exports = async (req, res) => {
    try {
        let body = req.body;
        let _id = req.header("data");
        let { id } = req.params;
        let post = await Post.findById({ _id });
        if (post.user === id) {
            let updatedPost = await Post.findByIdAndUpdate(
                { _id },
                {
                    $set: { ...body },
                },
                { new: true }
            );
            res.status(201).json({
                status: true,
                message: "Post was updated successfully",
                data: updatedPost,
            });
        } else {
            res.status(401).json({ message: "not authorized" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
