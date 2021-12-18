const UserInfos = require("../../models/infos");
module.exports = async (req, res) => {
    try {
        let users = await UserInfos.find();
        res.status(200).json({
            status: true,
            message: "users list",
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ status: false, error });
    }
};
