const express = require("express");
const api = express.Router();
const authController = require("../controllers/authController");

/**
 * Caller function for global error handling
 * route all calls through this to try and handle errors
 */

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

/* account endpoints */
api.post("/api/account/login", use(authController.signin));
api.post("/api/account/register", use(authController.register));

module.exports = api;
