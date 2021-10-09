const express = require("express");

const router = express.Router();

require("../db/conn");
const Registration = require("../models/registrationschema");

router.get("/", (req, res) => {
  res.send("Server Router says Hello");
});

router.get("/register", (req, res) => {
  res.send("just checking");
});

// with async await
router.post("/register", async (req, res) => {
  const { serial, active, store_name, regdate, email } = req.body;

  if (!serial || !active || !email) {
    return res.status(422).json({ error: "Invalid registration details" });
  }

  if (serial % 9 !== 0) {
    return res
      .status(422)
      .json({ error: "Invalid Serial Number, Please Check" });
  }

  try {
    const userExists = await Registration.findOne({
      serial: serial,
      active: true,
    });

    if (userExists) {
      return res.status(422).json({ error: "Serial Already Registered" });
    }
    const register = new Registration({
      serial,
      active,
      store_name,
      regdate,
      email,
    });

    await register.save();

    res.status(201).json({ message: "Serial Registered Successfully" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
