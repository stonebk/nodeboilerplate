var express = require('express'),
    app = module.exports = express.createServer();

require(__dirname + '/config/env.js')(express, app);
require(__dirname + '/routes')(app);

app.listen(3000);
console.log("Express server listening on port %d in %s mode",
            app.address().port, app.settings.env);
