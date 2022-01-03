const express = require("express");
const api = express.Router();
const postController = require("../controllers/postController");

/**
 * Caller function for global error handling
 * route all calls through this to try and handle errors
 */

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

/** Posts endpoints */
api.get("/:id", use(postController.post));
api.get("/timeline/all", use(postController.timeline));

api.put("/:id/like", use(postController.like));
api.put("/:id", use(postController.update));

api.post("/", use(postController.create));
api.delete("/:id", use(postController.remove));

module.exports = api;
