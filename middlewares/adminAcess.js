const User = require("../models/user");
module.exports = async (req, res, next) => {
    try {
        let { id } = req.params;
        const user = await User.findById(id);
        if (user.isAdmin) {
            next();
        } else {
            return res
                .status(401)
                .json({ status: false, message: "Access Denied" });
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ error });
    }
};
