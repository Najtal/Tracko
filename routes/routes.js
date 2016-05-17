
module.exports = function(app){

// ---------------------------------------------------------
//              ROUTES - WEB
// ---------------------------------------------------------
var web = require('./web/index');
app.use('/', web);



// ---------------------------------------------------------
//              ROUTES - DASHBOARD
// ---------------------------------------------------------

var login = require('./dashboard/login');
app.use('/dashboard', login);

}

