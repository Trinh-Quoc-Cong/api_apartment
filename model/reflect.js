const mongoose = require("mongoose")

const reflectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        image: [
            {
            type: String,

        }],
        Date: {
            type: String,
            
        },
        content: {
            type: String,
            
        }
    }
)
let Reflect = mongoose.model("Reflect",reflectSchema);
module.exports = {Reflect};