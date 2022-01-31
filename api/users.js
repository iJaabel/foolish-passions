const api = require("express").Router();
const userController = require("../controllers/userController");

/**
 * Caller function for global error handling
 * route all calls through this to try and handle errors
 */

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

  /** account endpoints */
api.get("/api/users/", use(userController.user));

api.put("/api/users/:id/follow", use(userController.follow));
api.put("/api/users/:id/unfollow", use(userController.unfollow));
api.put("/api/users/:id", use(userController.update));

api.delete("/api/users/:id", use(userController.remove));

module.exports = api;
