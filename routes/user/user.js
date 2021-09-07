const express = require("express");
const router = express.Router();
const { register } = require("./register");
const { login } = require("./login");
const { addInformations } = require("./addInformations");
const { update } = require("./update");
const { reportUser } = require("./reportUser");
const { addPost } = require("./addPost");
const { editPost } = require("./editPost");
const { deletePost } = require("./deletePost");
const { reportPost } = require("./reportPost");
const { deleteProfile } = require("./deleteProfile");
const User = require("../../models/user");
const UserInfos = require("../../models/infos");
const Posts = require("../../models/post");
const verify = require("../../middlewares/verifyToken");
const userAccess = require("../../middlewares/userAccess");

///CREATE USER
// /api/user/register
router.post("/register", register);

///USER LOGN
// /api/user/login
router.post("/login", login);

///USER ADD INFORMATIONS
// /api/user/informations

router.post("/informations/:id", verify, userAccess, addInformations);

///USER UPDATE INFORMATIONS
// /api/user/updateProfile
router.put("/updatePofile/:id", verify, userAccess, update);

///GET USER
// /api/user/profile
router.get("/profile/:id", verify, userAccess, async (req, res) => {
    try {
        let { id } = req.params;
        let profile = await UserInfos.findOne({ user: id });
        res.status(201).json({ status: true, data: profile });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, error });
    }
});

///USER ADD POST
// /api/user/addPost
router.post("/addPost/:id", verify, userAccess, addPost);

///USER UPDATE POST
// /api/user/editPost
router.put("/editPost/:id", verify, userAccess, editPost);

///USER DELETE POST
// /api/user/deletePost
router.delete("/deletePost/:id", verify, userAccess, deletePost);

///USER REPORT POST
// /api/user/reportPost
router.put("/reportPost/:id", verify, userAccess, reportPost);

///USER GET POSTS
// /api/user/posts

router.get("/posts", async (req, res) => {
    try {
        let id = req.header("data");
        let posts = await Posts.find();
        res.status(201).json({ status: true, message: "POSTS", data: posts });
    } catch (error) {
        console.log(error);
        res.status(401).json({ status: false, error });
    }
});
///USER REPORT PROFILE
// /api/user/flag
router.put("/flag/:id", verify, userAccess, reportUser);

///USER DELETE PROFILE
// /api/user/deleteProfile
router.put("/deleteProfile/:id", verify, userAccess, deleteProfile);

module.exports = router;
