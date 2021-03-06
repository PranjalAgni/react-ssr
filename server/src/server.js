const initalizeApp = require("./app");
const config = require("./config/index");

const main = () => {
  const app = initalizeApp();
  app.listen(config.PORT, () => {
    console.log(`Server listening on port http://localhost:${config.PORT}/`);
  });
};

main();
