const User = require("../../models/user");
exports.addAdmin = async (req, res) => {
    try {
        let id = req.header("data");
        console.log(id);
        await User.findByIdAndUpdate(id, { $set: { isAdmin: true } });
        let newAdmin = await User.findById(id);
        res.status(201).json({
            status: true,
            message: "admin was added successfully",
            newAdmin,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ error });
    }
};
