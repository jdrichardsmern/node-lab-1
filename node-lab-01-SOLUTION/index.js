const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", function(req, res) {
  res.render("index", { name: "JD" });
});

app.get("/signup", (req, res) => {
  res.render("form");
});

app.post("/user", (req, res) => {
  const user = req.body;
  res.json({
    // firstName: user.fName,
    // lastName: user.lName,
    // email: user.email,
    // phone: user.phone,
    // car: user.car,
    // contact: user.contact,
    // addedInfo: user.addedInfo
    user
  });
});

app.get("/search", (req, res) => {
  res.json({
    message: req.query
  });
});

app.get("*", (req, res) => {
  //res.send('Page does not exist. Check your url');
  res.render("error", { message: "TRY SOMETHING ELSE" });
});

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is now running on PORT ${port}`);
});
