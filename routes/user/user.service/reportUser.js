const Infos = require("../../../models/infos");
const User = require("../../../models/user");
module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        await Infos.findOneAndUpdate(
            { user: id },
            { $set: { isReported: true } }
        );
        let reportedProfile = await Infos.findOne({ user: id });
        res.status(201).json({
            status: true,
            message: "User was reported!",
            data: reportedProfile,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
