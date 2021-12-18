const Posts = require("../../../models/post");
module.exports = async (req, res) => {
    try {
        let { city } = req.params;
        let postsByCity = await Posts.find({
            city: city.toLowerCase(),
        });
        res.status(201).json({
            status: true,
            message: "Posts List by City ",
            data: postsByCity,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: error });
    }
};
