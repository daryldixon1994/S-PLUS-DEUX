const User = require("../models/user");
module.exports = async (req, res, next) => {
    try {
        let { email } = req.body;
        const user = await User.findOne({ email });
        console.log(user);
        if (user.isUser && !user.isBanned) {
            next();
        } else if (user.isUser && user.isBanned) {
            return res.status(401).json({
                status: false,
                message:
                    "We are sorry, you got Banned for 15 days! please contact us for more information",
            });
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
