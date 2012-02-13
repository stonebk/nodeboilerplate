var express = require('express'),
    app = module.exports = express.createServer(),
    opts = require(__dirname + '/config/opts.js');

require(__dirname + '/config/env.js')(express, app);
require(__dirname + '/routes')(app);

app.listen(opts.port);
console.log("Express server listening on port %d in %s mode",
            app.address().port, app.settings.env);
