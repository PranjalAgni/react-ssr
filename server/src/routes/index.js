const { Router } = require("express");
const flags = require("./flags");
// const ssr = require("./ssr");
const router = Router();

router.use("/flags", flags);
// router.use("/ssr", ssr);
module.exports = router;
