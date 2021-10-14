const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");
const appRouter = require("./routes/index");

const initalizeApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan("combined"));
  app.use(compression());
  app.use("/api", appRouter);
  app.get("/", (_req, res) => {
    return res.status(200).json({
      status: "running"
    });
  });

  return app;
};

module.exports = initalizeApp;
