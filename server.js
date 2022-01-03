const express = require("express");

/** config express */
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 8800;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(helmet());
dotenv.config();

/** config mongoDB */
const db = require("mongoose");
db.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("🕹️  DB connected 🛡️");
  }
);

// CORS Header Handler (Mostly handled by Helmet)
app.use((req, res, next) => {
  //allows all "*" webpages to access this API, change it to just the domain later
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// --- ROUTES ---

const api = require("./api");
app.use(api);

// --- *** ---

// global error handler
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// starts the server
const server = app.listen(port, () => {
  console.log(`✨ Foolishly serving the world 🌎 🚀`);
});

module.exports = server;
