const {News} = require("../model/news")

const newsController = {
    addNews: async (req, res) => {
        try {
            const newNews = new News(req.body);
            const savedNews = await newNews.save();
            res.status(200).json(savedNews);
        } catch (err) {
            res.status(500).json(err);// http request code
        }
    },
    getAllNews: async (req, res) => {
        try {
            const news = await News.find();
            res.status(200).json(news);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getANews: async (req, res) => {
        try {
            const news = await News.findById(req.params.id);

            res.status(200).json(news);

        } catch (err) {
            res.status(500).json(err);

        }
    },
    updateNews: async (req, res) => {
        try {
            const news = await News.findById(req.params.id);
            await news.updateOne({ $set: req.body });
            res.status(200).json("update news successfully");

        } catch (error) {
            res.status(500).json(error);

        }
    },
    deleteNews: async (req, res) => {
        try {
            // update ở trong Book với thuộc tính là author , chuyển về null . nếu là mảng thì dùng pull để kéo ra
            
            await News.findByIdAndDelete(req.params.id);
            res.status(200).json("delete news seccessfully");
        } catch (error) {
            res.status(500).json(error);
        }

    }
};
module.exports = newsController;