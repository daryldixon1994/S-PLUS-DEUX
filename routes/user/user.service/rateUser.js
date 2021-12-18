const User = require("../../../models/user");
module.exports = async (req, res) => {
    try {
        let _id = req.header("userId");
        let ratedUser = await User.findByIdAndUpdate(
            { _id },
            { $inc: { rate: 1 } },
            { new: true }
        );
        res.status(200).json({
            status: true,
            message: "Rated",
            data: ratedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ status: false, error });
    }
};
