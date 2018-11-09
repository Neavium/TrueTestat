import express from 'express';
const router = express.Router();
import {editNoteController} from '../controller/editNoteController.mjs';

router.get("/createNote", editNoteController.createNote.bind(editNoteController));
router.post("/saveNote", editNoteController.saveNote.bind(editNoteController));
router.get("/editNote/:id/", editNoteController.editNote.bind(editNoteController));
router.post("/updateNote/:id/", editNoteController.updateNote.bind(editNoteController));

export const noteRoutes = router;