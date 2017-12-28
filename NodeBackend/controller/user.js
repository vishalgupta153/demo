var mongoose = require ('mongoose');
var config = require ('../config');
var jwt = require ('jsonwebtoken');
var async = require ('async');
var qs = require ('querystring');
// var moment = require ('moment-timezone');
var chalk = require ('chalk');

var register = mongoose.model("user");

exports.login = function(req, res) {
  var receivedValues = req.body;
  if (JSON.stringify(receivedValues) === '{}' || receivedValues === undefined || receivedValues === null) {
    console.log(chalk.red("### Error Message: User Not available"));
    res.json({
      "code": 403,
      "status": "Error",
      "message": "User Not available!"
    });
    return;
  } else {
    var usercolumns = ["email", "password"];
    for (var iter = 0; iter < usercolumns.length; iter++) {
      var columnName = usercolumns[iter];
      if (receivedValues[columnName] === undefined && (columnName === 'email' || columnName === 'password')) {
        console.log(chalk.red(columnName, " field is undefined"));
        res.json({
          "code": 403,
          "status": "Error",
          "message": columnName + " field is undefined"
        });
        return;
      }
    }
    var user = new register();
    user.email = req.body.email;
    user.password = req.body.password;

    register.findOne({
      'email': req.body.email
    }, function(err, userDetail) {
      if (userDetail !== null) {
        if (userDetail.validPassword(req.body.password)) {
          var authToken = jwt.sign(userDetail, config.secret, {
            expiresIn: 1440 * 60 * 30 // expires in 24 hours
          });
          var data = {
            userId:userDetail._id,
            email: userDetail.email,
            status: "success"
          };
          res.json({
            "code": 200,
            "authToken": authToken,
            "userId":userDetail._id,
            "status":"success"
          });
        } else {
          console.log(chalk.green("### Error Message: Email2 or Password is Worng"));
          res.json({
            "code": 403,
            "status": "Error",
            "message": "Email or Password is Worng"
          });
        }
      } else {
        console.log(chalk.red("### Error Message: Email1 not found"));
        res.json({
          "code": 403,
          "status": "Error",
          "message": "Email not found "
        });
      }
    });
  }
};

exports.register = function(req, res) {
  //console.log('1111111...........');
  var receivedValues = req.body;
  if (JSON.stringify(receivedValues) === '{}' || receivedValues === undefined || receivedValues === null) {
    console.log(chalk.red("### Error Message: Invalid Data Enter"));
    res.json({
      "code": 403,
      "status": "Error",
      "message": "Invalid Data Enter"
    });
    return;
  } else {
    register.findOne({
      'email': req.body.email
    }, function(err, user) {
      if (!user) {
        var userdata = new register();
        userdata.password = userdata.generateHash(req.body.password);
        userdata.firstName = req.body.firstName;
        userdata.email = req.body.email;
        userdata.phoneNumber =req.body.phoneNumber;

        userdata.save(function(err, login) {
          if (!err) {
            var data = {
              userId: login._id,
              email: login.email,
              status: "success"
            };
            var authToken = jwt.sign(userdata, config.secret, {
              expiresIn: 1440 * 60 * 30 // expires in 1440 minutes
            });
            console.log(chalk.green("### Sucess Message: Account Register...."));
            res.json({
              "code": 200,
              "authToken": authToken,
              "userId":login._id,
              "status":"success"
            });
          } else {
            console.log(chalk.red("### Error Message: Account not  Register...."));
            res.json(false);
          }
        });
      } else {
        console.log(chalk.red("### Error Message: Account already exiting"));
        res.json({
          "code": 403,
          "status": "Error",
          "message": "Account already exiting"
        });
      }
    });
  }
}