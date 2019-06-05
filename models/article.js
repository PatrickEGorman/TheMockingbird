let mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    image_url: String,
    contents: String,
    date: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);

exports.Article = Article;