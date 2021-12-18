const User = require("../../../models/user");
const { RegisterValidation } = require("../validation");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
    try {
        let { email, password } = req.body;
        //////////////VALIDATION///////////////////////
        let { error } = await RegisterValidation(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        let checkEmail = await User.findOne({ email });
        if (checkEmail) {
            return res.status(400).json({
                status: false,
                message: "this email is already exists",
            });
        }
        /////////////////HASH PASSWORD/////////////////////////////////////
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // ///////////////////CREATE NEW USER///////////////////////////////
        const newUser = new User({
            email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        // const transporter = nodemailer.createTransport({
        //     service: "hotmail",
        //     auth: {
        //         user: "splusdeux.services@outlook.com",
        //         pass: "splusdeuxhighservices@@147123",
        //     },
        // });
        // const options = {
        //     from: "splusdeux.services@outlook.com",
        //     to: `${email}`,
        //     subject: "Confirm your e-mail",
        //     text: `Welcome to SPlusDeux, please click on the link below to confirm your e-mail adresse`,
        // };
        // await transporter.sendMail(options, (err, info) => {
        //     if (err) {
        //         console.log(error);
        //         return;
        //     }
        // });
        res.status(201).json({
            status: true,
            message: "GREAT! HERE WE GO!",
            data: savedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ status: false, message: "kkk", error });
    }
};
