const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "config.env" });

const dbConnection = require("./db/dbConnection");
const globalError = require("./middlewares/errorMiddleware");

const app = express();

//Connect to DataBase
dbConnection();

app.use(cors());

//Global error handling middleware
app.use(globalError);

const server = app.listen(process.env.PORT, () => {
  console.log(`App Running on port ${process.env.PORT}`);
});
