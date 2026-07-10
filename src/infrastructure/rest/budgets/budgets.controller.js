const Budgets = require("../../../domain/models/budgets.model");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.FindAllBudgets = async (req, res) => {
  try {
    const budgets = await Budgets.find();
    res.json({ budgets });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en traer los Budgets");
  }
};

exports.FindBudgetsById = async (req, res) => {
  try {
    const budgets = await Budgets.findById(req.budgets.id);
    res.json({ budgets });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en traer Budget");
  }
};

exports.CreateBudgets = async (req, res) => {
  try {
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: "usuario no existe" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en creacion de Usuario");
  }
};