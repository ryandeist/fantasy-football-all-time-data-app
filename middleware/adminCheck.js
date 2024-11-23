const adminCheck = (req, res, next) => {
    if (req.session.user.isAdmin) return next()
        res.redirect('/');
};

module.exports = adminCheck;