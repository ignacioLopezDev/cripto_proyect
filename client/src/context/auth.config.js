// .ENV data from AUTH0

const { config } = require("dotenv");
config();

module.exports = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENTID,
  clientSecret: process.env.AUTHO_CLIENT_SECRET,
};
