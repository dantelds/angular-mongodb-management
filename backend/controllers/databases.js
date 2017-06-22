var mongoose = require('mongoose'),
    Admin = mongoose.mongo.Admin;


exports.getDatabases = function (req, res) {
    mongoose.connection.once('open', function(){
    new Admin(mongoose.connection.db).listDatabases(function(err, result) {
            if(err) throw err;       
                   mongoose.connection.db.close(); 
                   res.send(result.databases); 
        });
    });    
    mongoose.connect('mongodb://localhost/');
};

