const express = require("express");
const router = express.Router();
const adminAccess = require("../../middlewares/adminAcess");
const verify = require("../../middlewares/verifyToken");
const { addAdmin } = require("./addAdmin");
const { removeAdmin } = require("./removeAdmin");

// ADD ADMIN
// /api/admin/addAdmin
router.put("/addAdmin/:id", [verify, adminAccess], addAdmin);

// REMOVE ADMIN
// /api/admin/removeAdmin
router.put("/removeAdmin/:id", [verify, adminAccess], removeAdmin);

//ADMIN GET USERS
// /api/admin/users
router.get("/users", [verify, adminAccess], require("./getUsers"));

///ADMIN GET USER
// /api/admin/profile
router.get("/profile/:id", [verify, adminAccess], require("./userProfile"));

//ADMIN GET POSTS

// /api/admin/allPosts
router.get("/allPosts/:id", [verify, adminAccess], require("./getPosts"));

///ADMIN DELETE POST
// /api/admin/deletePost
router.delete(
    "/deletePost/:id",
    [verify, adminAccess],
    require("./admin.deletePost")
);

//ADMIN BAN USER
// /api/admin/banUser
router.put("/banUser/:id", [verify, adminAccess], require("./banUser"));

//AMDIN GET
module.exports = router;
