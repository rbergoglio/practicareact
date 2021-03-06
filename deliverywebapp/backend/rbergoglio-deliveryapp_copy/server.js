const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully");
});

const foodRouter = require("./routes/food");
const usersRouter = require("./routes/users");
const orderRouter = require("./routes/order");

app.use("/food", foodRouter);
app.use("/users", usersRouter);
app.use("/order", orderRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

/* 
bajarse heroku cli
npm install -g heroku
a
para hacer cambios en el back:
cd backend
cd rbergoglio-deliveryapp
git status
git commit -am ""
git push heroku master

*/
