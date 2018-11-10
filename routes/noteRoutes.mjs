import express from 'express';
const router = express.Router();
import {editNoteController} from '../controller/editNoteController.mjs';

router.get("/createNote/:theme", editNoteController.createNote.bind(editNoteController));
router.post("/saveNote/:theme", editNoteController.saveNote.bind(editNoteController));
router.get("/editNote/:id/:theme", editNoteController.editNote.bind(editNoteController));
router.post("/updateNote/:id/:theme", editNoteController.updateNote.bind(editNoteController));

export const noteRoutes = router;
