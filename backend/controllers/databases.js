var mongoose = require('mongoose'),
    MongoClient = require('mongodb').MongoClient,
    Admin = mongoose.mongo.Admin;

exports.getDatabases = function (req, res) {
   mongoose.connection.once('open', function(){
        new Admin(mongoose.connection.db).listDatabases(function(err, result) {
            if(err) 
                return res.status(500).send(err.message);       
            mongoose.connection.db.close(); 
            res.send(result.databases); 
        });
    });    
    mongoose.connection.once('error', function(err){
        res.status.send(err);
    });  
    mongoose.connect('mongodb://localhost:27017/admin', {user:req.user.username, pwd:req.user.pwd});
};

