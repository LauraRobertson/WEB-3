var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dSettings = require('../sqlsettings.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log("HERE IS THE REQUEST: ");
  console.log(req.body);

  var instance = mysql.createConnection({
    host: dSettings.host,
    user: dSettings.user,
    password: dSettings.password,
    database: dSettings.database,
  });

  instance.connect(function(err) {
    if (err) console.log("ERROR CONNECTING TO DB FROM EDIT");
    var email = req.body['email'].toLowerCase();



      var deleteQuery = "DELETE from `user` WHERE email = " + "'" +email+ "'";

      // BUG: DELETE ERRORS OUT WHEN THE USER HAS CREATED AWARDS
/*
      instance.query(deleteQuery, function (err, result) {
         if (err) throw err;
         console.log("RESULT FROM DELETE");
         console.log(result);
         res.send(true);
    });
*/
});

});
module.exports = router;
