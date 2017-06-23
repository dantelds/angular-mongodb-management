var mongoose = require('mongoose'),
    MongoClient = require('mongodb').MongoClient,
    jwt = require('express-jwt');


exports.login = function (req, res) {
    mongoose.connection.once('open', function(paso1, paso2){
            console.log('estoy conectado', paso1);
            console.log('estoy conectado', paso2);   
            res.send(paso1);
            mongoose.connection.close();   
    });
    mongoose.connection.once('error', function(err){
            console.log('error de credenciales', err);
            res.send(err);
    }); 
   /* console.log('req.body---->', req);
    console.log('url--->', 'mongodb://'+req.body.username+':'+req.body.password+'@localhost/');*/
    //MongoClient.connect('mongodb://localhost/');
    mongoose.connect('mongodb://'+req.body.username+':'+req.body.password+'@localhost/admin');
    //mongoose.connect('mongodb://admin:admin@localhost/');
};

