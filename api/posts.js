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
api.get("/api/profile/:username", use(postController.profile));
api.get("/api/posts/:id", use(postController.post));
api.get("/api/posts/timeline/:userId", use(postController.timeline));

api.put("/api/posts/:id/like", use(postController.like));
api.put("/api/posts/:id", use(postController.update));

api.post("/api/posts/", use(postController.create));
api.delete("/api/posts/:id", use(postController.remove));

module.exports = api;
