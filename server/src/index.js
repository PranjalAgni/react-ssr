const path = require("path");
require("ignore-styles");
require("@babel/register")({
  configFile: path.resolve(__dirname, "../.babelrc"),
  ignore: [/(node_modules)/]
});

// boot the server
require("./server");
