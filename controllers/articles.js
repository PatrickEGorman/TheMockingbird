import {Article} from '../models/article'

export let article_responses = {
    create_article_page : function (req, res, next) {
        return res.render('article/create_article', {title: 'Create Article', csrfToken: req.csrfToken()});
    },

   create_article : function (req, res, next) {
        let errors = [];
        if (req.body.title.length > 100) {
            errors.push('Article title length must be under 100 characters');
        }
        let newArticle;
        let publicPath ="";
        if(req.files) {
            let imageFile = req.files.image;
            let format = imageFile.name.split('.')[imageFile.name.split('.').length - 1];
            if(!format in ['gif', 'jpg', 'jpeg', 'png', 'svg', 'bmp']) {
                errors.push("."+format+" is not a valid image format.");
            }
            else if(imageFile.size > 20000000) {
                errors.push("Uploaded file is "+(imageFile.size/1000000).toFixed(0)+"mb which is over the 20mb limit");
            }
            else {
                publicPath = '/uploads/' + Date.now() + '.' + format;
                let uploadPath = __dirname + '/../public' + publicPath;
                imageFile.mv(uploadPath);
            }
        }
        else{
            console.log("No image given");
        }

        if(errors.length>0){
            return res.render('article/create_article', {
                title: 'Create Article',
                csrfToken: req.csrfToken(),
                formData:req.body,
                errors: errors
            });
        }

        const createArticleWithMessages = async () => {
            newArticle = new Article({
                title: req.body.title,
                author: req.body.author ? req.body.author : "Anonymous",
                category: req.body.category,
                image_url: publicPath,
                image_caption: req.body.image_caption,
                contents: req.body.contents
            });

            await newArticle.save();
        };
        createArticleWithMessages().then(() => {
            return res.redirect('/articles/view_article/' + newArticle.id);
        });
    },

    get_article_list : function (req, res, next) {
        Article.find({}, function (err, articles) {
            if (err) throw err;
            for (let i = 0; i < articles.length; i++) {
                if (articles[i].contents.length > 250) {
                    articles[i].contents = articles[i].contents.slice(0, 249) + "...";
                }
            }
            return res.json(articles);
        }).sort('-date').limit(Number(req.params.num_articles));
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
        }).sort('-date');
    },

    view_article_category : function (req, res, next) {
        let list_category = req.params.category;
        Article.find({category: list_category}, function (err, articles) {
            if (err) throw err;
            for (let i = 0; i < articles.length; i++) {
                if (articles[i].contents.length > 250) {
                    articles[i].contents = articles[i].contents.slice(0, 249) + "...";
                }
            }
            return res.render('article/list_article_category', {title: list_category, articles: articles})
        }).sort('-date');
    },

    article : function (req, res, next) {
        Article.findById(req.params.article_id, function (err, article) {
            if (err) throw err;
            return res.render('article/view_article', {title: article.title, article: article})
        })
    }
}