import express from 'express'
var router = express.Router();
import {article_responses} from '../controllers/articles'
import csurf from 'csurf'

var csrfProtection = csurf({ cookie: true });

router.get('/create_article', csrfProtection, article_responses.create_article_page);
router.post('/create_article', csrfProtection, article_responses.create_article);
router.get('/view_articles', article_responses.view_articles);
router.get('/view_article/:article_id', article_responses.article);


export let articlesRouter = router;