const Infos = require("../../../models/infos");
const User = require("../../../models/user");
const ObjectId = require("mongodb").ObjectId;
module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        var o_id = new ObjectId(id);
        const existedInfos = await Infos.findOne({ user: o_id });
        if (existedInfos) {
            res.status(403).json({
                status: false,
                message: "Your informations are already added!",
            });
        } else {
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
            console.log(req.file);
          
            const user = await User.findById(id);
            let userInfos = new Infos({
                user: user._id,
                firstName,
                lastName,
                photo: req.file
                    ? `${req.protocol}://${req.get("host")}/uploads/${
                          req.file.filename
                      }`
                    : "/uploads/logo.png",
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
                message:  "Infos were added successfully",
                data: newInfos,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
