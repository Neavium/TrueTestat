const express = require('express');
const router = express.Router();
const indexLinks = require('../controller/indexController.js');

router.get('/', indexLinks.showIndex);
router.get("/createNote", indexLinks.createNote);
router.get("/styleSwitch", indexLinks.styleSwitch);
router.get("/sortFinishDate", indexLinks.sortFinishDate);
router.get("/sortCreateDate", indexLinks.sortCreateDate);
router.get("/sortImportance", indexLinks.sortImportance);
router.get("/hideFinished", indexLinks.hideFinished);

module.exports = router;