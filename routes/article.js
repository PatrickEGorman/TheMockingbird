import express from 'express'
var router = express.Router();
import {article_responses} from '../controllers/articles'
import csurf from 'csurf'

var csrfProtection = csurf({ cookie: true });

router.get('/create_article', csrfProtection, article_responses.create_article_page);
router.post('/create_article', csrfProtection, article_responses.create_article);
router.get('/view_articles', article_responses.view_articles);
router.get('/view_article/:article_id', article_responses.article);
router.get('/category/:category', article_responses.view_article_category);
router.get('/article_list/:num_articles', article_responses.get_article_list);


export let articlesRouter = router;