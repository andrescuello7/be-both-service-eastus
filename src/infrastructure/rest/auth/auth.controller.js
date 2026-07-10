const Usuario = require("../../../domain/models/user.model");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.FindUserByToken = async (req, res) => {
  try {
    const user = await Usuario.findById(req.user.id);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en autenticar al Usuario");
  }
};

exports.AuthUser = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ msg: errores.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await Usuario.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "usuario no existe" });
    }
    const PassCorrect = await bcrypt.compare(password, user.password);
    if (!PassCorrect) {
      return res.status(400).json({ msg: "password incorrecto" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, process.env.SECRET_KEY, (error, token) => {
      if (error) {
        throw error;
      }
      res.send({ token, user: payload.user });
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en autenticar al Usuario");
  }
};