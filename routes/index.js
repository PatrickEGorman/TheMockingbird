import express from 'express'
var router = express.Router();
import {home_responses} from '../controllers/home'

/* GET home page. */
router.get('/', home_responses.home);
router.get('/privacy_policy', home_responses.privacy_policy)

export let indexRouter = router;
