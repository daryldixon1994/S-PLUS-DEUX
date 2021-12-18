const Post = require("../../../models/post");
const User = require("../../../models/user");
const Infos = require("../../../models/infos");
module.exports = async (req, res) => {
    try {
        let {
            city,
            delegation,
            adresseOne,
            adresseTwo,
            surface,
            rooms,
            price,
            type,
            purpose,
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
            type: type.toLowerCase(),
            purpose,
            city: city.toLowerCase(),
            delegation: delegation.toLowerCase(),
            adresseOne: adresseOne.toLowerCase(),
            adresseTwo: adresseTwo.toLowerCase(),
            surface,
            rooms,
            price,
            photos:
                req.files.length !== 0
                    ? req.files.map(
                          (elt) =>
                              `${req.protocol}://${req.get("host")}/uploads/${
                                  elt.filename
                              }`
                      )
                    : "/uploads/addPhotos.jpg",
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
