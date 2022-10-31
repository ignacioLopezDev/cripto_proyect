const User = require("./User")
const Favorite = require("./Favorite")

User.belongsToMany(Favorite, {through: "UserFavorites"})
Favorite.belongsToMany(User, {through: "UserFavorites"})

module.exports = {User, Favorite}