const Post = require("../../models/post");
const User = require("../../models/user");
const Infos = require("../../models/infos");
exports.addPost = async (req, res) => {
    try {
        let {
            city,
            delegation,
            adresseOne,
            adresseTwo,
            surface,
            rooms,
            price,
        } = req.body;
        let { id } = req.params;
        const user = await User.findById(id);
        const infos = await Infos.findOne({ user: id });
        let post = new Post({
            user: user._id,
            image: infos.photo,
            firstName: infos.firstName,
            lastName: infos.lastName,
            phone: infos.phone,
            city,
            delegation,
            adresseOne,
            adresseTwo,
            surface,
            rooms,
            price,
        });
        let newPost = await post.save();
        res.status(201).json({
            status: true,
            message: "Post was added successfully",
            data: newPost,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
