const User = require("../../../domain/models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.CreateUser = async (req, res) => {
  const { email, password } = req.body;
  const validation = await User.findOne({ email });
  try {
    if (validation) {
      return res.status(400).send("Error en validacion de email");
    }
    const salt = await bcrypt.genSalt(10);
    const encrypt = await bcrypt.hash(password, salt);
    const userModel = new User({
      ...req.body,
      password: encrypt,
      CreateAdd: Date.now(),
    });
    await userModel.save();
    const payload = {
      user: {
        id: userModel.id,
      },
    };
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      (error, token) => {
        if (error) {
          throw error;
        }
        res.send({token, user: userModel});
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en creacion de Usuario");
  }
};

//Metodo para ver usuarios
exports.FindAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en metodo de lectura");
  }
};

//Metodo para ver usuario por ID
exports.FindUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findById(id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en metodo de lectura");
  }
};

//Metodo para modificar datos de usuario

exports.UpdateUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await User.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.send(update);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en la actualizacion de usuario");
  }
};

//Metodo para eliminar usuario por ID

exports.DeleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await User.findByIdAndRemove({ _id: id });
    res.send(update);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en la eliminacion de usuario");
  }
};