const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config({ path: "./config.env" });

require("../db/conn");

app.use(express.json());
app.use(cookieParser());

// we link the router files to make our route easy
app.use(require("../router/auth"));

app.use(express.static(path.join(__dirname, "../", "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT;

// Middelware
const middleware = (req, res, next) => {
  console.log(`Hello my Middleware`);
  next();
};

// app.get('/about', middleware, (req, res) => {
//     console.log(`Hello my About`);
//     res.send(`Hello About world from the server`);
// });

// app.get('/contact', (req, res) => {
//     res.send(`Hello Contact world from the server`);
// });

// app.get('/signin', (req, res) => {
//     res.send(`Hello Login world from the server`);
// });

// app.get('/signup', (req, res) => {
//     res.send(`Hello Registration world from the server`);
// });

app.listen(PORT, () => {
  console.log(`server is runnig at port no ${PORT}`);
});
