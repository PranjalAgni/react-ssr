require("dotenv").config();

const isDev = process.env.NODE_ENV === "production" ? false : true;

module.exports = {
  isDev,
  PORT: process.env.PORT
};
