const Posts = require("../../models/post");
module.exports = async (req, res) => {
    try {
        let posts = await Posts.find();
        res.status(200).json({
            status: true,
            message: "posts list",
            data: posts,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ status: false, error });
    }
};
