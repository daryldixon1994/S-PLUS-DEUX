const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretToken = process.env.SECRET_TOKEN;

module.exports = async (req, res, next) => {
    const token = req.header("jwt");
    if (!token) {
        return res.status(401).send("Access denied");
    }
    try {
        const verified = await jwt.verify(token, secretToken);
        req.user = verified;
        req.token = token;
        next();
    } catch (error) {
        // console.log(error);
        res.status(405).send("invalid token");
    }
};
