const User = require("../../models/user");
exports.removeAdmin = async (req, res) => {
    try {
        let id = req.header("data");
        console.log(id);
        await User.findByIdAndUpdate(id, { $set: { isAdmin: false } });
        let newAdmin = await User.findById(id);
        res.status(201).json({
            status: true,
            message: "No more admin",
            newAdmin,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ error });
    }
};
