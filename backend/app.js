require("dotenv").config(); //process.env.____
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./controllers/errorHandler");
const authRoutes = require("./routes/auth");
const teamRoutes = require("./routes/team");
const messageRoutes = require("./routes/message");
const complainRoutes = require("./routes/complain");
// basic setup
const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api/auth", authRoutes);

app.use("/api/teams/:userId", teamRoutes);

app.use("/api/teams/messages/:teamId/:userId", messageRoutes);

app.use("/api/teams/complains/:teamId/:studentId/:instructorId", complainRoutes);

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
