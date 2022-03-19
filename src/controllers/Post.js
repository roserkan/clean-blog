const Post = require('../models/Post');



const add = async (req, res, next) => {
    try {
        await new Post(req.body).save();
        res.redirect('/');
    } catch (err) {
        next(err);
    }
};

module.exports = {
    add,
};
