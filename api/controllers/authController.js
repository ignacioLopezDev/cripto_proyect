const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/index.model");
const { secret, expires, saltRounds } = require("../config/auth.config");

const signUp = async (req, res, next) => {
  try {
    let password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(saltRounds)
    );
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: password,
    });

    let token = jwt.sign({ user: user }, secret, { expiresIn: expires });
    
    res.send(`User Created Token ${token}`);
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  let { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  console.log("user:", user);
  if (!user) return res.status(203).send("The user does not exist");

  try {
    if (bcrypt.compare(password, user.password)) {
      let token = jwt.sign({ user: user }, secret, { expiresIn: expires });
      res.send({
        user: user,
        token: token,
      });
    } else {
      res.status(401).send({ msg: "Incorrect Password" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, signIn };
