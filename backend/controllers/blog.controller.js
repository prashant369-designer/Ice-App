const model = require("../models/blog.models");

exports.createblogmodel = async(req,res)=>{
    try{
        const blog = await model.create(req.body);
        res.status(201).json(blog);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

exports.getblogmodel = async (req,res)=>{
    try{
        const blog = await model.find();
        res.status(200).json(blog);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.getblogmodelbyid = async (req,res)=>{
    try{
        const blog = await model.findById(req.params.id);
        if(!blog){
            return res.status(404).json({message:"blog not found"});
        }
        res.status(200).json(blog);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.deleteblogmodel = async(req,res)=>{
    try{
        const blog = await model.findByIdAndDelete(req.params.id);
        if(!blog){
            return res.status(404).json({message:"blog not found"});
        }
        res.status(200).json({message:"blog deleted successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.updateblogmodel = async(req,res)=>{
    try{
        const blog = await model.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!blog){
            return res.status(404).json({message:"blog not found"});
        }
        res.status(200).json(blog);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}