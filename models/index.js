import mongoose from 'mongoose'

import {Article} from './article'

function connectDb()  {
    return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
}

const models = { Article };

export {connectDb, models} ;
