var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.error = 'login failed';
  res.redirect('/login');
},
function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

module.exports = router;