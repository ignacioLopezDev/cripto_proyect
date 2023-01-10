const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const volleyball = require("volleyball");

const app = express();

const db = require("./db/index.db");
// const models = require("./models/index.model");
const routes = require("./routes/index.routes");
const port = 3001

// MIDDLEWARES
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api", routes);

// ERROR MIDDLEWATE
app.use((err, req, res, next) => {
  console.error("err.stack");
  res.status(505 || error.status).send({ status: "error", error: err.message });
});

// SYNC CON DB Y LEVANTAR PUERTO
db.sync({ force: false })
  .then(() => {
    console.log("connected to db");
  })
  .then(() => {
    app.listen(port, () => {
      console.log("listening Port 3001");
    });
  })
  .catch(console.error);
