const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")
const newsRoute = require("./routes/news")
const reflectRoute = require("./routes/reflect")

dotenv.config();


app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

mongoose.connect((process.env.MONGODB_URL))
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.use("/api/news", newsRoute);
app.use("/api/reflect", reflectRoute);
app.listen(8000, () => {
    console.log("sever is runnning");
})