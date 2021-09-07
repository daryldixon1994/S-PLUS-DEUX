const Infos = require("../../models/infos");
const User = require("../../models/user");
exports.addInformations = async (req, res) => {
    try {
        let {
            firstName,
            lastName,
            age,
            gender,
            phone,
            city,
            delegation,
            occupation,
        } = req.body;
        let { id } = req.params;
        const user = await User.findById(id);
        let userInfos = new Infos({
            user: user._id,
            firstName,
            lastName,
            age,
            gender,
            phone,
            city,
            delegation,
            occupation,
        });
        let newInfos = await userInfos.save();
        res.status(201).json({
            status: true,
            message: "Post was added successfully",
            data: newInfos,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
