import {Article} from "../models/article";


export default function(req, res, next) {
    Article.find({}, function (err, articles) {
        if (err) throw err;
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].contents.length > 250) {
                articles[i].contents = articles[i].contents.slice(0, 249) + "...";
            }
        }
        return res.render('index', {title: 'Home', articles: articles})
    }).sort('-date');
};
