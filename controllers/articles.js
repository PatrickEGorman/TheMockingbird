let Article = require('../models/article');

exports.create_article_page = function(req, res, next) {
    return res.render('article/create_article', { title: 'Create Article' });
};

exports.create_article = function(req, res, next) {
    const createArticleWithMessages = async () => {
        const newArticle = new Article.Article({
            title : req.body.title,
            image_url : req.body.image_url,
            contents : req.body.contents
        });

        await newArticle.save();
    };
    createArticleWithMessages().then(() =>{
        return res.redirect('/');
    });
};

exports.view_articles = function (req, res, next) {
    Article.Article.find({}, function(err, articles) {
        if (err) throw err;

        return res.render('article/list_articles', {title: 'View Articles', articles: articles})
    })
};