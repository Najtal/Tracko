var express = require('express');
var router = express.Router();

/*
 *  ROUTE: /dashboard/
 */


/**
 *  LOGIN TO DASHBOARD
 */
router.get('/login', function(req, res) {
    res.render('dashboard/login');
});


/**
 *  REGISTER TO DASHBOARD
 */
router.get('/register', function(req, res) {
    res.render('dashboard/login_register');
});

/**
 *  REGISTER TO DASHBOARD
 */
router.get('/forgotten', function(req, res) {
    res.render('dashboard/login_forgotten');
});



/**
 *  REGISTER TO DASHBOARD
 *  POST to Add User Service
 */
router.post('/register', function(req, res) {
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.email;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});


/**
 *  DASHBOARD HOME
 */


module.exports = router;
