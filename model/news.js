const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema(
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
let News = mongoose.model("News",newsSchema);
module.exports = {News};