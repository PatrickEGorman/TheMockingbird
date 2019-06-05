let mongoose = require('mongoose');

let Article = require('./article');

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Article };

exports.connectDb = connectDb ;

exports.models = models;