var mongoose = require('mongoose');
var Warlock = mongoose.model('warlocks');
var validator = {
  validateWarlock: function(warlock){
    if(!warlock.username ||
      !warlock.password ||
      !warlock.name ||
      !warlock.birthDate ||
      !warlock.lastName ||
      !warlock.school ||
      !warlock.gender ||
      !warlock.health ||
      !warlock.magic ||
      !warlock.strength){
      return false;
    }
    return true;
  }
};

exports.findAllWarlocks = function (req, res) {
    Warlock.find(function (err, warlocks) {
        if (err)
            res.send(500, err.message);

        res.status(200).jsonp(warlocks);
    });
};

exports.findWarlock = function (req, res) {
    Warlock.findOne({"username": req.body.username, "password": req.body.password}, function (err, warlock) {
        if (err)
            return res.status(500).send(err.message);
        else if (!warlock)
            return res.status(400).send('User or password incorrect, try again.');
        else
            res.status(200).jsonp(warlock);
    });
};

exports.createWarlock = function (req, res) {
    console.log(req.body);
    var warlock = new Warlock({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        birthDate: req.body.birthDate,
        lastName: req.body.lastName,
        school: req.body.school,
        gender: req.body.gender,
        health: req.body.health,
        magic: req.body.magic,
        strength: req.body.strength
    });
    if(!validator.validateWarlock(warlock)){
      return res.status(400).send('there are some fields empty');
    }

    warlock.save(function (err, warlock) {
        if (err)
            return res.send(500, err.message);
        res.status(200).jsonp(warlock);
    });
};

exports.updateWarlock = function (req, res) {
    // Warlock.findById(req.params.id, function (err, warlock) {
    //     warlock.name = req.body.name;
    //     warlock.birthDate = req.body.birthDate;
    //     warlock.lastName = req.body.lastName;
    //     warlock.school = req.body.school;
    //     warlock.gender = req.body.gender;
    //     warlock.health = req.body.health;
    //     warlock.magic = req.body.magic;
    //     warlock.strength = req.body.strength;
    //     warlock.save(function (err) {
    //         if (err)
    //             return res.send(500, err.message);
    //         res.status(200).jsonp(warlock);
    //     });
    // });
};

exports.deleteWarlock = function (req, res) {
    // Warlock.findById(req.params.id, function (err, warlock) {
    //     warlock.remove(function (err) {
    //         if (err)
    //             return res.send(500, err.message);
    //         res.status(200);
    //     });
    // });
};
