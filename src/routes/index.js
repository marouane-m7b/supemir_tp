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

  if(!name || name.trim().length === 0) {
    return res.status(400).send("Nom invalide, veuillez renseigner un nom");
  }

  if(!age || age < 0) {  
    return res.status(400).send("Age invalide, veuillez renseigner un age");
  }

  if(!gender || gender.trim().length === 0) {
    return res.status(400).send("Genre invalide, veuillez renseigner un genre");
  }


  if(age > 18 || age < 10) {
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
