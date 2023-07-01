/** @format */

const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: `mongodb://${encodeURIComponent(
    process.env.DB_USER
  )}:${encodeURIComponent(process.env.DB_PASSWORD)}@${encodeURIComponent(
    process.env.DB_DOMAIN
  )}/`,
  APP_SECRET: process.env.APP_SECRET,
};
