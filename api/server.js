const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const volleyball = require("volleyball");

const db = require("./db/index.db");
const models = require("./models/index.model");

const app = express();

const routes = require("./routes/index.routes");

// MIDDLEWARES
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

// ERROR MIDDLEWATE
app.use((err, req, res, next) => {
  console.error("err.stack");
  res.status(505 || error.status).send({ status: "error", error: err.message });
});

db.sync({ force: false })
  .then(() => {
    console.log("connected to db");
  })
  .then(() => {
    app.listen(3001, () => {
      console.log("listening Port 3001");
    });
  })
  .catch(console.error);
