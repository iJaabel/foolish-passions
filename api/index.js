const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");

// config express api
const app = express();
const port = 8800;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
dotenv.config();

//database connections
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// CORS Header Handler (Mostly handled by Helmet)
app.use((req, res, next) => {
  //allows all webpages to access this API
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
});

// --- end points ---

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);

// --- --- --- --- ---

// error handling
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

//---

app.listen(port, () => {
  console.log(`Backend server is running`);
  console.log(`and listening on port ${port}`);
});
