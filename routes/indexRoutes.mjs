import express from 'express';

const router = express.Router();
import {indexController} from '../controller/indexController.mjs';

router.get('/', indexController.showIndex.bind(indexController));
router.get("/createNote/", indexController.createNote.bind(indexController));
router.get("/styleSwitch/", indexController.styleSwitch.bind(indexController));
router.get("/sortFinishDate/", indexController.sortFinishDate.bind(indexController));
router.get("/sortCreateDate/", indexController.sortCreateDate.bind(indexController));
router.get("/sortImportance/", indexController.sortImportance.bind(indexController));
router.get("/hideFinished/", indexController.hideFinished.bind(indexController));
router.get("/editNote/", indexController.editNote.bind(indexController));

export const indexRoutes = router;
