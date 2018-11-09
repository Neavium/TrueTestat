import express from 'express';
const router = express.Router();
import {editNoteController} from '../controller/editNoteController.mjs';

router.get("/", editNoteController.showNote.bind(editNoteController));
router.get("/createNote", editNoteController.createNote.bind(editNoteController));
router.get("/editNote:id", editNoteController.showNote.bind(editNoteController))
router.post("/saveNote", editNoteController.saveNote.bind(editNoteController));

export const noteRoutes = router;