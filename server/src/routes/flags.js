const { Router } = require("express");

const router = Router();

router.get("/", (_req, res) => {
  const randomNumber = Math.floor(Math.random() * 200);
  let featureFlag = false;
  if (randomNumber % 2 === 0) featureFlag = true;
  return res.status(200).json({
    flag: featureFlag
  });
});

module.exports = router;
