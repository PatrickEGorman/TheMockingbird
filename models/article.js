import mongoose from 'mongoose'
import "regenerator-runtime"

const articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    image_url: String,
    image_caption: String,
    contents: String,
    date: { type: Date, default: Date.now },
});

articleSchema.statics.getAll = async function() {
    return this.getAll();
};

const Article = mongoose.model('Article', articleSchema);

export {Article};