const express = require("express");
const router = express.Router();
const path = require("path");
const Student = require("../models/student");

// Start route to get html file
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
})
// End route to get html file

// Start route to submit form data
router.post("/submit", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = parseInt(req.body.age);
  const gender = req.body.gender;

  if(!name) {
    return res.status(400).send("Nom invalide, veuillez renseigner tous les champs");
  }

  if(age >= 15 || age <= 12) {
    return res.status(400).send("Age invalide, veuillez renseigner un age positif");
  }

  if(gender.includes("homme") && gender.includes("femme")) {
    return res.status(400).send("Genre invalide, veuillez renseigner un genre valide");
  }

  const student = new Student({
    name: name,
    age: age,
    gender: gender
  });

  try {
    student.save();
    res.send("Enregistrement reussi");
  } catch(err) {
    res.status(500).send(err);
  }

})
// End route to submit form data


module.exports = router;
