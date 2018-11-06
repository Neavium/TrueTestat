const express = require("express");
const router = express.Router();
const editNoteController = require("../controller/editNoteController");

router.get("/", editNoteController.showNote);

module.exports = router;