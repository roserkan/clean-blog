const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const PostSchema = new Schema(
    {
        title: String,
        detail: String,
    },
    { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model('Post', PostSchema);