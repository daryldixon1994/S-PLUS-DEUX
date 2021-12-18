const Posts = require("../../../models/post");

module.exports = async (req, res) => {
    try {
        let { city, delegation, maxPrice, minPrice } = req.body;
        if (city) {
            let postsByPrice = await Posts.find({
                city: city.toLowerCase(),
                price: { $lte: maxPrice, $gte: minPrice },
            });
            res.status(201).json({
                status: true,
                message: "Posts List ",
                data: postsByPrice,
            });
        } else if (delegation) {
            let postsByPrice = await Posts.find({
                delegation: delegation.toLowerCase(),
                price: { $lte: maxPrice, $gte: minPrice },
            });
            res.status(201).json({
                status: true,
                message: "Posts List ",
                data: postsByPrice,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: error });
    }
};
