const Infos = require("../../../models/infos");

module.exports = async (req, res) => {
    try {
        let photo;
        let { id } = req.params;
        if (req.file) {
            photo = `${req.protocol}://${req.get("host")}/uploads/${
                req.file.filename
            }`;
        }

        const newPhoto = await Infos.findOneAndUpdate(
            { user: id },
            { $set: { photo } },
            { new: true }
        );
        res.status(200).json({
            status: true,
            message: "Photo updated successfully",
            data: newPhoto,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
