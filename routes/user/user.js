const express = require("express");
const router = express.Router();
const UserInfos = require("../../models/infos");
const verify = require("../../middlewares/verifyToken");
const userAccess = require("../../middlewares/userAccess");
const upload = require("../../middlewares/upload");
///CREATE USER
// /api/user/register
router.post("/register", require("./user.service/register"));

///USER LOGN
// /api/user/login
router.post("/login/:id", userAccess, require("./user.service/login"));

///USER ADD INFORMATIONS
// /api/user/informations

router.post(
    "/informations/:id",
    [verify, userAccess, upload.single("photo")],
    require("./infos/addInformations")
);

///USER UPDATE INFORMATIONS
// /api/user/updateProfile
router.put(
    "/updateProfile/:id",
    [verify, userAccess],
    require("./infos/update")
);
///USER UPDATE Photo
// /api/user/updatePhoto
router.put(
    "/updatePhoto/:id",
    [verify, userAccess, upload.single("photo")],
    require("./user.service/updateUserPhoto")
);

///USER ADD POST
// /api/user/addPost
router.post(
    "/addPost/:id",
    [verify, userAccess, upload.array("photos", 50)],
    require("./posts/addPost")
);

///USER UPDATE POST
// /api/user/editPost
router.post("/editPost/:id", [verify, userAccess], require("./posts/editPost"));

///USER UPDATE A SINGLE PHOTO IN POST
// /api/user/editPostPhoto
router.put(
    "/editPostPhoto/:id",
    [verify, userAccess, upload.single("photo")],
    require("./posts/editPostPhotos")
);

///USER DELETE A SINGLE PHOTO IN POST
// /api/user/deletePostPhoto
router.put(
    "/deletePostPhoto/:id",
    [verify, userAccess],
    require("./posts/deletePostPhoto")
);

///USER DELETE POST
// /api/user/deletePost
router.delete(
    "/deletePost/:id",
    [verify, userAccess],
    require("./posts/deletePost")
);

///USER REPORT POST
// /api/user/reportPost
router.put(
    "/reportPost/:id",
    [verify, userAccess],
    require("./posts/reportPost")
);

///USER GET POSTS
// /api/user/posts
router.get("/posts", require("./posts/getPosts"));

//FILTER POSTS LIST BY CITY
// /api/user/filterPrice
router.get("/posts/city/:city", require("./posts/filterPostsByCity"));

//FILTER POSTS LIST BY DELEGATION
// /api/user/filterPrice
router.get(
    "/posts/delegation/:delegation",
    require("./posts/filterPostsByDelegation")
);

//FILTER POSTS LIST BY LOCATION AND PRICE
// /api/user/posts/price
router.get("/posts/price", require("./posts/filterPostsByLocationAndPrice"));

///USER REPORT PROFILE
// /api/user/report
router.put(
    "/report/:id",
    [verify, userAccess],
    require("./user.service/reportUser")
);

///USER DELETE PROFILE
// /api/user/deleteProfile
router.put(
    "/deleteProfile/:id",
    [verify, userAccess],
    require("./user.service/deleteProfile")
);
router.put(
    "/rateUser/:id",
    [verify, userAccess],
    require("./user.service/rateUser")
);
module.exports = router;
