
//Modulen inladen
var express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');
var sass = require("node-sass");
var assetManager = require('connect-assetmanager');

var app = express();


//Poort instellen
app.set('port', process.env.PORT || 8001);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

//Javascript automatisch samenvoegen en optimalizeren
app.use(assetManager({
    services: {
        route: new RegExp('/js/services\.js'),
        path: path.join(__dirname, 'static/js/services/'),
        dataType: 'javascript',
        files: [ '*' ],
        debug: ('development' == app.get('env'))
    },
    directives: {
        route: new RegExp('/js/directives\.js'),
        path: path.join(__dirname, 'static/js/directives/'),
        dataType: 'javascript',
        files: [ '*' ],
        debug: ('development' == app.get('env'))
    },
    filters: {
        route: new RegExp('/js/filters\.js'),
        path: path.join(__dirname, 'static/js/filters/'),
        dataType: 'javascript',
        files: [ '*' ],
        debug: ('development' == app.get('env'))
    },
    controllers: {
        route: new RegExp('/js/controllers\.js'),
        path: path.join(__dirname, 'static/js/controllers/'),
        dataType: 'javascript',
        files: [ '*' ],
        debug: ('development' == app.get('env'))
    },
    app: {
        route: new RegExp('/js/app\.js'),
        path: path.join(__dirname, 'static/js/'),
        dataType: 'javascript',
        files: [ '*' ],
        debug: ('development' == app.get('env'))
    }
}));

//SASS files automatisch compilen en optimalizeren
app.use(sass.middleware({
    src: path.join(__dirname, 'static'),
    dest: path.join(__dirname, 'public'),
    debug: ('development' == app.get('env'))
}));

// development only
if('development' == app.get('env')){
    app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
