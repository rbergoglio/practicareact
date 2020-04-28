const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const mail = req.body.mail;
  const phone = req.body.phone;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const newUser = new User({ mail, phone, firstName, lastName });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
