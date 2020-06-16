const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    item:{ 
        type: String, 
        required: true 
    },
    price: { 
        type: String, 
        required:true 
    }
})

module.exports = mongoose.model("item", itemSchema)