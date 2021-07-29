const auth = (req, res, next) => {
    req.session.userID ? next() : res.redirect('/login')};

module.exports = auth;