const model = require("../models/restaurantlocation.models");

exports.createlocation = async (req, res) => {
    try {
        const location = await model.create(req.body);
        res.status(200).json(location);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getlocation = async (req, res) => {
    try {
        const location = await model.find();
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getlocationbyid = async(req,res)=>{
    try{
        const location = await model.findById(req.params.id);
        res.status(200).json(location);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.deletelocation = async (req, res) => {
    try {
        const location = await model.findByIdAndDelete(req.params.id);
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatelocation = async (req, res) => {
    try {
        const location = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}