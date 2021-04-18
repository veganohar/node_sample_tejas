const db = require("../models");
const User = db.user;

exports.createNewUser = (req,res)=>{
    let user = new User();
    user.name = req.body.name;
    user.city = req.body.city;
    user.phone = req.body.phone;
    user.age = req.body.age;
    user.save((err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            message:"Record stored Successfully",
            data:response
        })        
    })
}

exports.getAllUsers= (req,res)=>{
    User.find((err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.send({
            data:response
        })  
    })
}

exports.deleteUser = (req,res)=>{
    User.deleteOne({_id:req.params.uid},(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            data:response,
            message:"Record deleted Successfully"
        })
    })
}

exports.updateUser = (req,res)=>{
    User.updateOne({_id:req.body.id},req.body,(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            data:response,
            message:"Record Updated Successfully"
        })
    })
}