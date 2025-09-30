const model = require("../models/menu.models");


exports.createmenu = async (req, res) => {
    try{
        const menu = await model.create(req.body);
        res.status(201).json(menu);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

exports.getmenu = async (req, res) => {
    try {
        const menu = await model.find();
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getmenubyid = async (req,res)=>{
    try{
        const menu = await model.findById(req.params.id);
        if(!menu){
            return res.status(404).json({message:"menu not found"});
        }
        res.status(200).json(menu);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.deletemenu = async (req, res) => {
    try {
        const menu = await model.findByIdAndDelete(req.params.id);
        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
        }
        res.status(200).json({ message: "Menu deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatemenu = async(req,res)=>{
    try{
        const menu = await model.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!menu){
            return res.status(404).json({message:"menu not found"});
        }
        res.status(200).json(menu);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

