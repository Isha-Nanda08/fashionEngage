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
    image: {
        type: String,
        required: false, // Make this optional
    },
    
});

const BlogModel = mongoose.model('blogs', BlogSchema);
module.exports = BlogModel;