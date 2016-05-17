var express = require('express');
var router = express.Router();

/**
 *  USER LIST
 *  For admin purpose : list all users
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find(
    	{},
    	{},
    	function(e,docs){
        	res.render('dashboard/userlist', {
            	"userlist" : docs
        	});
    	}
    );
});

module.exports = router;
