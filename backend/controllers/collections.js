var mongoose = require('mongoose');

exports.getCollections = function (req, res) {
   mongoose.Connection.db.getCollections(function(err, res){
        res.status(200).jsonp(res);
   });
};