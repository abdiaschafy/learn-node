const express = require("express");
const stuffCtrl = require("../controllers/stuff.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware, stuffCtrl.getAllStuff);
router.post("/", authMiddleware, stuffCtrl.createThing);
router.get("/:id", authMiddleware, stuffCtrl.getOneThing);
router.put("/:id", authMiddleware, stuffCtrl.modifyThing);
router.delete("/:id", authMiddleware, stuffCtrl.deleteThing);

module.exports = router;
