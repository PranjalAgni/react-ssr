const { Router } = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const fs = require("fs");
const App = require("../../../src/App").default;

const getHtmlFileContents = () => {
  const htmlFilePath = path.join(__dirname, "../../../", "public/index.html");
  console.log("htmlFilePath: ", htmlFilePath);
  return new Promise((resolve) => {
    fs.readFile(htmlFilePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        resolve({
          error: err,
          data: null
        });
      }
      resolve({
        error: null,
        data
      });
    });
  });
};

const router = Router();

router.get("/", async (_req, res) => {
  const app = ReactDOMServer.renderToString(React.createElement(App));

  const { error, data } = await getHtmlFileContents();
  if (error) {
    console.error("Something went wrong:", error);
    return res.status(500).send("Oops, better luck next time!");
  }

  const ssrApp = data.replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>`
  );

  return res.status(200).send(ssrApp);
});

module.exports = router;
