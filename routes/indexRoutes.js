const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController.js');

router.get('/', indexController.showIndex);
router.get("/createNote", indexController.createNote);
router.get("/styleSwitch", indexController.styleSwitch);
router.get("/sortFinishDate", indexController.sortFinishDate);
router.get("/sortCreateDate", indexController.sortCreateDate);
router.get("/sortImportance", indexController.sortImportance);
router.get("/hideFinished", indexController.hideFinished);
router.get("/editNote", indexController.editNote);

module.exports = router;