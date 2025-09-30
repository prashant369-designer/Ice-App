const mongoose = require('mongoose');

const herobannerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    maintitle: { type: String, required: true },
    description: { type: String, required: true },
    button: { type: String, required: true },  
    images:[{
        image1: { type: String, required: true },
        image2: { type: String, required: true },
        image3: { type: String, required: true },
        image4: { type: String, required: true },
        image5: { type: String, required: true },
        image6: { type: String, required: true },
}]   
});

module.exports = mongoose.model("Herobanner", herobannerSchema);
