const Favorite = require("../models/Favorite");
const User = require("../models/User");

// ADD FAVORITE
const addFavorite = async (req, res, next) => {
  const { user, criptoId } = req.body;
  try {
    const checkUser = await User.findByPk(user);
    if (!checkUser) {
      res.status(404).send("User does not found");
    } else {
      const add = await Favorite.create({ criptoId });
      add.setUser(user);
      res.status(201).send(add);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE FAVORITE
const deleteFavorite = async (req, res, next) => {
  const { user, criptoId } = req.body;
  try {
    const checkFavorite = await Favorite.findOne({
      where: { criptoId, userId: user },
    });
    if (!checkFavorite) {
      res.status(404).send("This favorite does not exist");
    } else {
      const destroy = await Favorite.destroy({
        where: { criptoId, userId: user },
      });
      res.status(201).send("Favorite Deleted");
    }
  } catch (error) {
    next(error);
  }
};

// GET FAVORITES
const getFavorites = async (req, res, next) => {
  const { user } = req.body;
  try {
    const checkUser = await User.findByPk(user);
    if (!checkUser) res.status(404).send("User does not exist");

    const showFavorites = await Favorite.findAll({ where: { userId: user } });
    if (showFavorites.length === 0) {
      res.status(200).send("The user has no favorites");
    } else {
      let result = showFavorites.map((coin) => coin.dataValues.criptoId);
      res.status(200).send(result);
      console.log("showFavorites:", showFavorites);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { addFavorite, deleteFavorite, getFavorites };
