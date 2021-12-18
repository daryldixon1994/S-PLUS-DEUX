const UserInfos = require("../../models/infos");

module.exports = async (req, res) => {
    try {
        let _id = req.header("data");
        let profile = await UserInfos.findById({ _id });
        res.status(201).json({ status: true, data: profile });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
