
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views/');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'supersecretkeygoeshere'}));
  app.use(app.routes);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// Routes
app.get('/', routes.index);
app.post('/', routes.login);
app.get('/users', routes.allUsers);
app.get('/users/:id', routes.user);
app.get('/templates', routes.templates);
app.get('/events', routes.events);
app.get('/chapters', routes.chapters);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
