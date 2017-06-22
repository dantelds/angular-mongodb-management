var mongoose = require('mongoose');


exports.getCollections = function (req, res) {
    res.send({test:'test'}); 
    /*
   mongoose.connection.close();    
   mongoose.connect('mongodb://localhost/'+req.params.dbname, function(err, res) {
        if(err) throw err;
        mongoose.connection.db.collectionNames(function (err, collections) {
            console.log('soy las colleciones',collections); // [{ name: 'dbname.myCollection' }]
            res.status(200).jsonp(collections);
            mongoose.connection.close();    
        });
   });
/*
*/
/*
mongoose.connection.db.collectionNames(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });
*/
    /*

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
    //trying to get collection names
    mongoose.connection.db.collectionNames(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });
})

    console.log('req-------->', req.params.dbname);
    console.log('mongoose.Connection----->', mongoose.Connection);
    var connection = mongoose.createConnection('mongodb://localhost/'+req.params.dbname);
    console.log('connection----->', connection);
   connection.db.getCollections(function(err, res){
        res.status(200).jsonp(res);
   });*/
};