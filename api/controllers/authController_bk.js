const { User } = require("../models/index.model");

const signUp = async (req, res, next) => {
  let { nickname, email, picture } = req.body;
  const user = await User.findOrCreate({ where: { username: nickname, email, picture } });

  try {
    res.status(200).send(
      user,
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp };
