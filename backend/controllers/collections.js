var mongoose = require('mongoose');


exports.getCollections = function (req, res) {
    mongoose.connection.once('open', function(){
       
        mongoose.connection.db.listCollections().toArray(function (err, collections) {
                console.log('soy las colleciones',collections); 
                res.status(200).jsonp(collections);
                mongoose.connection.close();    
        });
        /*mongoose.connection.db.collectionNames().toArray(function (err, collections) {
                console.log('soy las colleciones',collections); 
                res.status(200).jsonp(collections);
                mongoose.connection.close();    
        });*/
    });  
    mongoose.connect('mongodb://localhost/'+req.params.dbname);

};