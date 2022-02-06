const UserInfos = require("../../../models/infos");
module.exports = async (req, res) => {
    try {
        let id = req.header("data");
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
