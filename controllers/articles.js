import {Article} from '../models/article'

export let article_responses = {
    create_article_page : function (req, res, next) {
        return res.render('article/create_article', {title: 'Create Article'});
    },

   create_article : function (req, res, next) {
        if (req.body.title.length > 100) {
            return res.render('article/create_article', {
                title: 'Create Article',
                error: 'Article title length must be under 100 characters'
            });
        }
        let newArticle;
        const createArticleWithMessages = async () => {
            newArticle = new Article({
                title: req.body.title,
                image_url: req.body.image_url,
                contents: req.body.contents
            });

            await newArticle.save();
        };
        createArticleWithMessages().then(() => {
            return res.redirect('/articles/article/' + newArticle.id);
        });
    },

    view_articles : function (req, res, next) {
        Article.find({}, function (err, articles) {
            if (err) throw err;
            for (let i = 0; i < articles.length; i++) {
                if (articles[i].contents.length > 250) {
                    articles[i].contents = articles[i].contents.slice(0, 249) + "...";
                }
            }
            return res.render('article/list_articles', {title: 'View Articles', articles: articles})
        })
    },

    article : function (req, res, next) {
        Article.findById(req.params.article_id, function (err, article) {
            if (err) throw err;
            return res.render('article/view_article', {title: article.title, article: article})
        })
    }
}