module.exports = {
    index: (req, res) => {
        return res.render('index', { title: 'Comisión21' });
    },
    about: function (req, res, next) {
        res.render('about', { title: 'Express' });
    },
}