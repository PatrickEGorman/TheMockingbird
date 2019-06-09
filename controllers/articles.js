let Article = require('../models/article');

exports.create_article_page = function(req, res, next) {
    return res.render('article/create_article', { title: 'Create Article' });
};

exports.create_article = function(req, res, next) {
    if(req.body.title.length > 100){
        return res.render('article/create_article', { title: 'Create Article',
            error:'Article title length must be under 100 characters'});
    }
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
        for(let i=0; i<articles.length; i++){
            if(articles[i].contents.length > 250){
                articles[i].contents = articles[i].contents.slice(0, 249) + "...";
            }
        }
        return res.render('article/list_articles', {title: 'View Articles', articles: articles})
    })
};