const Post = require('../models/Post');

const home = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        res.render('index', { posts });
    } catch (err) {
        next(err);
    }
};

const about = async (req, res, next) => {
    try {
        // const photos = await Photo.find({});
        // res.render('about', { photos });
        res.render('about');
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const post = await Post.findOne({ _id: req.params.id });
        res.render('post', { post });
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        // const photo = await Photo.findOne({ _id: req.params.id });
        // res.render('edit', { photo });
        res.render('edit');

    } catch (err) {
        next(err);
    }
};

const add = async (req, res, next) => {
    try {
        // const photo = await Photo.findOne({ _id: req.params.id });
        // res.render('edit', { photo });
        res.render('add_post');

    } catch (err) {
        next(err);
    }
};

module.exports = {
    home,
    post,
    about,
    update,
    add,
};
