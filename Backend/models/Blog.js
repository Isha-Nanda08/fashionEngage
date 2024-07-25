const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    // image: {
    //     type: String ,
    //     required: false,
    // }
});

const BlogModel = mongoose.model('blogs', BlogSchema);
module.exports = BlogModel;