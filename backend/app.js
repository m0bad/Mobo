require("dotenv").config(); //process.env.____
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./controllers/errorHandler");
const authRoutes = require("./routes/auth");
// basic setup
const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api/auth", authRoutes);

// err handling
app.use((req, res, next) => {
  let err = new Error("Page Not Found!");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is Running On Port ${PORT}`);
});
