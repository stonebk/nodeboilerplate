module.exports = function (app) {
    app.get('/', index);
};

var index = function (req, res) {
    res.render('index', { title: 'Node Boilerplate' });
};