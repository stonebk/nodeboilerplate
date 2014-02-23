var fs = require('fs');

/**
 * Make directory if it doesn't exist already.
 *
 * @param {String} path The path to the directory.
 */
module.exports.mkdir = function (path) {
    try {
        fs.statSync(path);
    } catch (e) {
        if (e.code === 'ENOENT') {
            fs.mkdirSync(path);
        }
    }
};