

exports.create_article = function(req, res, next) {
    return res.render('article/create_article', { title: 'Create Article' });
};
