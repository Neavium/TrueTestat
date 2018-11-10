import express from 'express';
const router = express.Router();
import {indexController} from '../controller/indexController.mjs';

router.get('/', indexController.showIndex.bind(indexController));
router.get('/:theme', indexController.showIndex.bind(indexController));
router.get("/createNote/:theme", indexController.createNote.bind(indexController));
router.get("/styleSwitch/:theme", indexController.styleSwitch.bind(indexController));
router.get("/sortFinishDate/:theme", indexController.sortFinishDate.bind(indexController));
router.get("/sortCreateDate/:theme", indexController.sortCreateDate.bind(indexController));
router.get("/sortImportance/:theme", indexController.sortImportance.bind(indexController));
router.get("/hideFinished/:theme", indexController.hideFinished.bind(indexController));
router.get("/editNote/:theme", indexController.editNote.bind(indexController));

export const indexRoutes = router;
