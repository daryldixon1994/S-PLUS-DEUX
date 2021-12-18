const User = require("../../models/user");
module.exports = async (req, res) => {
    try {
        let _id = req.header("data");
        let bannedUser = await User.findByIdAndUpdate(
            { _id },
            { $set: { isBanned: true } },
            { new: true }
        );
        res.status(200).json({
            status: true,
            message: "User was banned successfully",
            data: bannedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ status: false, error });
    }
};
