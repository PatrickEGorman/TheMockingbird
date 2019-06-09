var express = require('express');
var router = express.Router();
var articles = require("../controllers/articles");


router.get('/create_article', articles.create_article_page);
router.post('/create_article', articles.create_article);
router.get('/view_articles', articles.view_articles);


module.exports = router;