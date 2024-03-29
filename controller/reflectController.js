const {Reflect} = require("../model/reflect")

const reflectController = {
    addNews: async (req, res) => {
        try {
            const newReflect = new Reflect(req.body);
            const savedReflect = await newReflect.save();
            res.status(200).json(savedReflect);
        } catch (err) {
            res.status(500).json(err);// http request code
        }
    },
    getAllNews: async (req, res) => {
        try {
            const reflect = await Reflect.find();
            res.status(200).json(reflect);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getANews: async (req, res) => {
        try {
            const reflect = await Reflect.findById(req.params.id);

            res.status(200).json(reflect);

        } catch (err) {
            res.status(500).json(err);

        }
    },
    updateNews: async (req, res) => {
        try {
            const reflect = await Reflect.findById(req.params.id);
            await reflect.updateOne({ $set: req.body });
            res.status(200).json("update reflect successfully");

        } catch (error) {
            res.status(500).json(error);

        }
    },
    deleteNews: async (req, res) => {
        try {
            // update ở trong Book với thuộc tính là author , chuyển về null . nếu là mảng thì dùng pull để kéo ra
            
            await Reflect.findByIdAndDelete(req.params.id);
            res.status(200).json("delete reflect seccessfully");
        } catch (error) {
            res.status(500).json(error);
        }

    }
};
module.exports = reflectController;