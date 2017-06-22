var mongoose = require('mongoose'),
    Admin = mongoose.mongo.Admin;


exports.getDatabases = function (req, res) {
    //res.send({test:'test'}); 
    
   // mongoose.connect('mongodb://localhost/');
    mongoose.connection.on('open', function(){
        console.log('open');
    new Admin(mongoose.connection.db).listDatabases(function(err, result) {
            if(err) throw err;       
                   console.log('result.databases------>', result.databases);
                   mongoose.connection.db.close(); 
                   res.send(result.databases); 
        });
    });    
    mongoose.connection.on('disconnected', function(){
            console.log('disconnected');
            //next();
    });
    mongoose.connect('mongodb://localhost/');
};

