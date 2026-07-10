const Transaction = require("../../../domain/models/transaction.model");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.FindAllTransactions = async (req, res) => {
  try {
    const transaction = await Transaction.find();
    res.json(transaction);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en busqueda de Transaction");
  }
};

exports.FindAllTransactionsToMonth = async (req, res) => {
  try {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, "0");

    const transaction = await Transaction.find({
      date: { $regex: `^${year}-${month}` },
    });

    res.json(transaction);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en busqueda de Transaction");
  }
};

exports.FindAllTransactionsSaved = async (req, res) => {
  try {
    const transaction = await Transaction.find({ category_id: "expense-savings" });
    res.json(transaction);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en busqueda de Transaction");
  }
};

exports.FindTransactionsById = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ id: req.params.id });
    res.json(transaction);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en busqueda de Transaction");
  }
};

exports.CreateTransaction = async (req, res) => {
  try {
    let transaction = new Transaction(req.body);
    await transaction.save();
    res.json(transaction);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en creacion de Transaction");
  }
};

exports.UpdateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ id: req.params.id });
    let updated = await Transaction.findByIdAndUpdate(transaction._id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en actualizacion de Transaction");
  }
};

exports.DeleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ id: req.params.id });
    let deleted = await Transaction.findByIdAndRemove(transaction._id);
    res.json(deleted);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en eliminacion de Transaction");
  }
};