const express = require("express");
const mongoose = require("mongoose");
const { route } = require("./routes/userRoutes");
const routes = require("./routes/userRoutes");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors({origin : "*"}))

mongoose
  .connect(
    "mongodb+srv://ruchakhadatkar83:pass123@learn.mix7ayf.mongodb.net/testDB",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", routes);

app.listen(5000, () => {
  console.log("Server started at port 5000");
});


