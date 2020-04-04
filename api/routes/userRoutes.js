const express = require('express');

const {
    userDelete,
    userFindAll,
    userFindByID,
    userPatch,
    userSave
} = require('./../controllers/userController')


const router = express.Router();

// get all users
router.get("/", userFindAll)

// get user by id
router.get("/:id_user", userFindByID)

// add user
router.post("/", userSave)

// update user
router.patch("/:id", userPatch)

// delete user
router.delete("/:id", userDelete);

module.exports = router;