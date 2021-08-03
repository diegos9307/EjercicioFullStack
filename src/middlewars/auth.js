const auth = (req, res, next) => {
    req.session.userId ? next() : res.redirect('/login')};

module.exports = auth;