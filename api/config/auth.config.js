const { config } = require("dotenv");
config();

module.exports = {
  secret: process.env.AUTH_SECRET,
  expires: process.env.AUTH_EXPIRES,
  saltRounds: process.env.AUTH_SALTROUNDS,
};
