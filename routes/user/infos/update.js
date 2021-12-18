const Infos = require("../../../models/infos");

module.exports = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        let updatedProfile = await Infos.findOneAndUpdate(
            { user: id },
            { $set: { ...body } },
            { new: true }
        );
        res.status(201).json({
            status: true,
            message: "Your data was updated successfully",
            data: updatedProfile,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
};
