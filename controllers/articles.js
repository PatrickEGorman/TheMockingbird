

exports.create_article_page = function(req, res, next) {
    return res.render('article/create_article', { title: 'Create Article' });
};

exports.create_article = function(req, res, next) {
    const createArticleWithMessages = async () => {
        const newArticle = new models.Article({
            title : req.body.title,
            image_url : req.body.image_url,
            contents : req.body.contents
        });

        await newArticle.save();
    };
    return res.render('article/create_article', { title: 'Create Article' });
};
