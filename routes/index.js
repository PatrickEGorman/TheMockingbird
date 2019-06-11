import express from 'express'
var router = express.Router();
import home from '../controllers/home'

/* GET home page. */
router.get('/', home);

export let indexRouter = router;
