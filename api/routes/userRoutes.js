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
router.get("/", async (req,res,next)=>{})

// get user by id
router.get("/:id_user", async (req,res,next)=>{})

// add user
router.post("/", async (req,res,next)=>{})

// update user
router.patch("/:id", async (req,res,next)=>{})

// delete user
router.delete("/:id", async (req,res,next)=>{});

module.exports = router;