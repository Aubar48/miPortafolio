module.exports = {
    /* function flecha agregada por el profe*/
    index: (req, res) => {
        return res.render('index');
    },
    /* function por defecto*/
    about: function (req, res, next) {
        res.render('about');
    },
}