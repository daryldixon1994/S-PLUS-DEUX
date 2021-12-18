const User = require("../../../models/user");
const UserInfos = require("../../../models/infos");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretToken = process.env.SECRET_TOKEN;

module.exports = async (req, res) => {
    let { email, password } = req.body;
    //////////////CHECK EMAIL///////////////////////
    const user = await User.findOne({ email });
    if (!user) {
        return res
            .status(401)
            .json({ status: false, message: "Wrong email, please try again" });
    }

    /////////////////DECRYPT PASSWORD/////////////////////////////////////
    const same = await bcrypt.compare(password, user.password);
    if (!same) {
        return res.status(401).json({
            status: false,
            message: "Invalid Password, please check again",
        });
    }
    // ///////////////////CREATE NEW TOKEN///////////////////////////////

    const token = jwt.sign(
        { id: user._id, email: user.email, password: user.password },
        secretToken,
        {
            expiresIn: "1d",
        }
    );
    let id = user._id;
    let registeredUser = await UserInfos.findOne({ user: id });
    {
        registeredUser ? (check = true) : (check = false);
    }
    res.status(201).json({
        status: true,
        message: `WELCOME`,
        id: user._id,
        token,
        check,
        isAdmin: user.isAdmin,
        isUser: user.isUser,
    });
};
