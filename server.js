const express = require("express");
const app = express();
const path = require('path')

/** config express */
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

const port = process.env.PORT || 8800;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(helmet());
dotenv.config();

/** config mongoDB */
const mongoose = require('mongoose')
mongoose.connect(
  `${process.env.MONGO_URI}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("🕹️  DB connected 🛡️")
);


// CORS Header Handler (Mostly handled by Helmet. This gives us more customability)
app.use((req, res, next) => {
  // Allows all "*" webpages to access this API, change it to just the domain later
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

// Serve static assets if in production
// Set static folder
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res, next) => res.sendFile(path.join(__dirname+'/client/build/index.html')))
// }

// starts the server
const server = app.listen(port, () => {
  console.log(`✨ Foolishly serving the world 🌎 🚀`);
});

module.exports = server;
