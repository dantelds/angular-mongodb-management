var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose'),
    Admin = mongoose.mongo.Admin;

// Connection to DB
/*
mongoose.connect('mongodb://localhost/warlockUniverse');
console.log('1');
mongoose.connection.on('open', function(){
  console.log('2---->', mongoose.connection.db);
  mongoose.connection.db.listCollections(function(error, collections) {
    console.log('3');
    if (error) {
      throw new Error(error);
    } else {
      collections.map(function(collection) {
        console.log('found collection %s', collection.name);
      });
    }
  });
});
/*
mongoose.connection.close();    
 mongoose.connect('mongodb://localhost/warlockUniverse', function(err, res) {
        if(err) throw err;
        console.log('mongoose.connection.db------->',mongoose.connection.db);
        mongoose.connection.db.l(function (err, collections) {
            console.log('soy las colleciones',collections); // [{ name: 'dbname.myCollection' }]
            res.status(200).jsonp(collections);
            mongoose.connection.close();    
        });
   });*/
/*
var connection = mongoose.createConnection('mongodb://admin:123456@localhost/admin');
mongoose.connect('mongodb://localhost/', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
  
});*/

/*var connection = mongoose.createConnection('mongodb://admin:123456@localhost/admin');


mongoose.connect('mongodb://localhost/', function(err, res) {
  if(err) throw err;
  new Admin(connection.db).listDatabases(function(err, result) {
         if(err) throw err;
        var allDatabases = result.databases;    
        console.log('listDatabases succeeded----->', allDatabases);
    });
  console.log('Connected to Database');
});*/




// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/warlocks')(app, mongoose),
 WarlockCtrl = require('./controllers/warlocks'),
 DataBasesCtrl = require('./controllers/databases'),
 CollectionsCtrl = require('./controllers/collections');
// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var api = express.Router();
api.route('/databases')
   .get(DataBasesCtrl.getDatabases);
api.route('/collections/:dbname')
   .get(CollectionsCtrl.getCollections);
api.route('/warlock')
   .get(WarlockCtrl.findAllWarlocks);
api.route('/signup')
  .post(WarlockCtrl.createWarlock);
api.route('/login')
  .post(WarlockCtrl.findWarlock);
api.route('/warlock/:id')
  .put(WarlockCtrl.updateWarlock)
  .delete(WarlockCtrl.deleteWarlock);



app.use(function (req, res, next) {
console.log("Setting header");
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/api', api);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
