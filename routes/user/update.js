const Infos = require("../../models/infos");
const User = require("../../models/user");
exports.update = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        // const user = await User.findById(id);
        await Infos.findOneAndUpdate({ user: id }, { $set: { ...body } });
        let updatedProfile = await Infos.findOne({ user: id });
        res.status(201).json({
            status: true,
            message: "User was updated successfully",
            data: updatedProfile,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
