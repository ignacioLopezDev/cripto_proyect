const User = require("./User")
const Favorite = require("./Favorite")

User.belongsToMany(Favorite, {through: "UserId"})
Favorite.belongsToMany(User, {through: "FavoriteId"})

module.exports = {User, Favorite}