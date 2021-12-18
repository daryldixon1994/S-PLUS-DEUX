const Post = require("../../../models/post");
const ObjectId = require("mongodb").ObjectId;
module.exports = async (req, res) => {
    try {
        let id = req.header("id");
        const photoPath = req.header("photoPath");
        var o_id = new ObjectId(id);
        let photoUrl;
        if (req.file) {
            photoUrl = `${req.protocol}://${req.get("host")}/uploads/${
                req.file.filename
            }`;
        }
        const newPhoto = await Post.updateOne(
            {
                _id: o_id,
                photos: photoPath,
            },
            { $set: { "photos.$": photoUrl } }
        );
        res.status(200).json({
            status: true,
            message: "Photo updated successfully",
            data: newPhoto,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
