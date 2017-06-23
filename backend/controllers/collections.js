var mongoose = require('mongoose');


exports.getCollections = function (req, res) {
    mongoose.connection.once('open', function(){
       
        mongoose.connection.db.listCollections().toArray(function (err, collections) {
                res.status(200).jsonp(collections);
                mongoose.connection.close();    
        });
    });  
    mongoose.connect('mongodb://localhost/'+req.params.dbname);

};