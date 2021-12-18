const Post = require("../../../models/post");
const ObjectId = require("mongodb").ObjectId;
module.exports = async (req, res) => {
    try {
        let _id = req.header("id");
        let { id } = req.params;
        const photoPath = req.header("photoPath");
        var o_id = new ObjectId(_id);
        let post = await Post.findOne({
            user: id,
        });
        if (post.user == id) {
            await Post.updateOne(
                { _id: o_id },
                { $pull: { photos: photoPath } }
            );
            res.status(200).json({
                status: true,
                message: "Photo deleted successfully",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
