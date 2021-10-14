require("@babel/register")({
  plugins: ["@babel/plugin-syntax-jsx"],
  presets: ["@babel/preset-env", "@babel/preset-react"]
});

const initalizeApp = require("./app");
const config = require("./config/index");

const main = () => {
  const app = initalizeApp();
  app.listen(config.PORT, () => {
    console.log(`Server listening on port http://localhost:${config.PORT}/`);
  });
};

main();
