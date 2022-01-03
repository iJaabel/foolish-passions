const express = require("express");
const api = express.Router();
const app = express()

/**
 * Status codes: 200, 401, 404, 500
 */

// --- Config routes ---
const authRoute = require("./auth");
const postRoute = require("./posts");
const userRoute = require("./users");

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

module.exports = api;
