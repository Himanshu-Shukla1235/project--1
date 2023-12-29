const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const dbConnection = require("./db/connect/connect.js");
const user = require("./db/signup/user.js");
const routs = require(path.join(__dirname, "./routes/routs.js"));
const port = process.env.port || 9000;

//--------------------------------setting path-------------------------------------
const staticpath = path.join(__dirname, "../public/frontend");
const hbspath = path.join(__dirname, "./hbsfiles/views");
const partials = path.join(__dirname, "./hbsfiles/partial");
console.log(partials);

//-----------------------------------middlewares-----------------------------------
app.use(express.json());
app.use(express.static(staticpath));
// app.use("/Evo-I",routs)
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//----------------------------------setting view engine--------------------------------

app.set("view engine", "hbs");
app.set("views", hbspath);

//-----------------------------------------regestring partials path--------------------------------->
hbs.registerPartials(partials);

//----------------------------------------routes------------------------------------------------------->

app.get("/signup", async (req, res) => {
  try {
    res.render("regester");
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/Login", async (req, res) => {
  try {
    res.render("Login");
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/signup", async (req, res) => {
  try {
    const signupData = await new user(req.body);
    if (signupData.password === signupData.confirmpassword) {
      const creatinguser = await signupData.save();
      res.status(201).render("userPage");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/Login", async (req, res) => {
  try {
    const loginData = req.body;

    const dbUserData = await user.findOne({ email: loginData.email });

    const ismatch = bcrypt.compare(loginData.password, dbUserData.password);
    console.log(ismatch);

    if (ismatch) {
      res.status(201).render("userPage");
    } else {
      return res.send("password incorrect");
    }
  } catch (e) {
    return res.status(400).send(e);
  }
});

//-----------------------------------linstening port---------------------------------------
app.listen(port, () => {
  console.log(`listning to the port ${port}`);
});
