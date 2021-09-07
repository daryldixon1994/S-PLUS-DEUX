const express = require("express");
const router = express.Router();
const adminAccess = require("../../middlewares/adminAcess");
const verify = require("../../middlewares/verifyToken");
const { addAdmin } = require("./addAdmin");
const { removeAdmin } = require("./removeAdmin");

// ADD ADMIN
// /api/admin/addAdmin
router.put("/addAdmin/:id", verify, adminAccess, addAdmin);
// REMOVE ADMIN
// /api/admin/removeAdmin
router.put("/removeAdmin/:id", verify, adminAccess, removeAdmin);


module.exports = router;
