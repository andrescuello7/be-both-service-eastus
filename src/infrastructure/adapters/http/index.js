const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");

function createHttpServer() {
  const app = express();

  app.set("port", process.env.PORT || 8000);
  app.use(morgan("dev"));
  app.use(cors());
  app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Define routes
  // Auth and User routes 
  app.use("/api/v1/auth", require("../../rest/auth/auth.routes"));
  app.use("/api/v1/user", require("../../rest/user/users.routes"));
  
  // Budgets and Transactions routes
  app.use("/api/v1/budgets", require("../../rest/budgets/budgets.routes"));
  app.use("/api/v1/transactions", require("../../rest/transactions/transactions.routes"));

  return app;
}

module.exports = {
  createHttpServer,
};
