import express from 'express';
const router = express.Router();
// const editNoteController = require("../controller/editNoteController");
import {editNoteController} from '../controller/editNoteController.mjs';

router.get("/", editNoteController.showNote.bind(editNoteController));
router.get("/saveNote", editNoteController.saveNote.bind(editNoteController));

export const noteRoutes = router;