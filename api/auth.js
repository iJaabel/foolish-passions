const express = require("express");
const api = express.Router();
const authController = require("../controllers/authController");

/**
 * Caller function for global error handling
 * route all calls through this to try and handle errors
 */

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

/* auth endpoints */
api.post("/login", use(authController.signin));
api.post("/register", use(authController.register));

module.exports = api;
