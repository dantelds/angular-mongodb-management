var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose'),
    middleware      = require('./services/middleware');



// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/models')(app, mongoose),
 LoginCtrl = require('./controllers/login'),
 DataBasesCtrl = require('./controllers/databases'),
 CollectionsCtrl = require('./controllers/collections');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
/*router.get('/databases',middleware.ensureAuthenticated, DataBasesCtrl.getDatabases);*/
router.get('/collections/:dbname', middleware.ensureAuthenticated, CollectionsCtrl.getCollections);
app.use(router);

// API routes
var api = express.Router();
api.route('/login')
  .post(LoginCtrl.login);
 api.route('/databases')
   .get(middleware.ensureAuthenticated, DataBasesCtrl.getDatabases);
/*
api.route('/warlock')
   .get(WarlockCtrl.findAllWarlocks);
api.route('/signup')
  .post(WarlockCtrl.createWarlock);
api.route('/warlock/:id')
  .put(WarlockCtrl.updateWarlock)
  .delete(WarlockCtrl.deleteWarlock);
*/


app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

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
