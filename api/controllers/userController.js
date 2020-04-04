const mongoose = require('mongoose');
const User = require('./../models/User');


exports.userFindAll= async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json({
            users
        });
    } catch (err) {
        res.status(500).json({
            error : err
        })
    }
}

exports.userFindByID = async (req,res)=>{
    try{
        const id = req.params.id_user;
        const user = await User.findById(id);

        res.status(200).json({
            message : "User by id",
            user
        })
    } catch (err) {
        res.status(500).json({
            error : err
        })
    }
}

exports.userSave = async(req,res)=>{
    try{
        const body = req.body;
    
        const user = new User({
            _id : mongoose.Types.ObjectId(),
            u_name : body.u_name,
            u_umur : body.u_umur,
            u_email : body.u_email,
            u_password : body.u_password,
        })

        const data = await user.save()
        res.status(200).json({
            message : "Add new user success!",
            data
        })
    } catch( err){
        res.status(500).json({
            message : "Something gonna wrong!",
            error : err
        })
    }
}

exports.userPatch = async (req,res)=>{
    try{
        const id = req.params.id;
        const body = req.body;

        await User.findOneAndUpdate({_id:id}, body)

        res.status(200).json({
            message : "Update user success"
        })
    } catch(err){
        res.status(500).json({
            error : err
        })
    }
}

exports.userDelete = async(req,res)=>{
    try{
        const id = req.params.id;
        await User.findOneAndRemove({_id:id})
        
        res.status(200).json({
            message : "Delete user successfull"
        })

    } catch (err) {
        res.status(500).json({
            error : err
        })
    }
}