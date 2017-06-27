var mongoose = require('mongoose'),
    userModel = mongoose.model('user'),
    jwt = require('express-jwt'),
    service = require('../services/service'),
    Admin = mongoose.mongo.Admin;


exports.login = function (req, res) {
    mongoose.connection.once('error', function (err) {
        res.status(500).send(err.message);
    });
    mongoose.connection.once('open', function () {     
                mongoose.connection.db.close(); 
                res.status(200).send({ token: service.createToken({user:req.body.username, pwd:req.body.password})});   
        
    });
    mongoose.connect('mongodb://localhost:27017/admin', {user:req.body.username, pwd:req.body.password});

};


