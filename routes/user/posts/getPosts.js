const Posts = require("../../../models/post")
module.exports = async (req, res) => {
    try {
        let posts = await Posts.find();
        res.status(201).json({ status: true, message: "POSTS", data: posts });
    } catch (error) {
        console.log(error);
        res.status(401).json({ status: false, error });
    }
};