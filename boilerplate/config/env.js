module.exports = function (express, app) {

    // Common configuration
    app.configure(function () {

        // Configure jQuery template engine
        app.set('views', __dirname + '/../views');
        app.set('view engine', 'jqtpl');
        app.register('.jqtpl', require('jqtpl').express);

        // Configure LESS compiler
        app.use('/css', express.compiler({
            enable: ['less'],
            src: __dirname + '/../src/less',
            dest: __dirname + '/../build/css'
        }));

        app.use(app.router);

        // Create static file servers for the build and public folders
        app.use(express.static(__dirname + '/../build'));
        app.use(express.static(__dirname + '/../public'));
    });

    // Development specific configuration
    app.configure('development', function () {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

    // Production specific configuration
    app.configure('production', function () {
        app.use(express.errorHandler());
    });

};