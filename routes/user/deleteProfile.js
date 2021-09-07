const Post = require("../../models/post");
const User = require("../../models/user");
exports.deleteProfile = async (req, res) => {
    try {
        let { id } = req.params;
        let deletedProfile = await User.findByIdAndRemove(id);
        res.status(201).json({
            status: true,
            message: "Prfile was deleted!",
            data: deletedProfile,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
