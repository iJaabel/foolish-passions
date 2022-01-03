const api = require("express").Router();
const userController = require("../controllers/userController");

/**
 * Caller function for global error handling
 * route all calls through this to try and handle errors
 */

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

  /** account endpoints */
api.get("/:id", use(userController.user));

api.put("/:id/follow", use(userController.follow));
api.put("/:id/unfollow", use(userController.unfollow));
api.put("/:id", use(userController.update));

api.delete("/:id", use(userController.remove));

module.exports = api;
