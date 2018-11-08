import {noteStorage} from '../services/noteStorage.mjs'

export class EditNoteController {
    showIndex(req, res) {
        res.render("index");
    };

    createOrder(req, res) {
        res.render("editNote");
    };

    async saveNote(req, res) {
        res.redirect("/");
        console.log(req.body);
        await noteStorage.add(req.body.noteTitle, req.body.noteDescription, req.body.noteDueTo, req.body.noteImportance, req.body.noteDone);
    };

    async showNote(req, res) {
        res.render("editNote");
        //await res.render("showorder", await orderStore.get(req.params.id));
    };

    async deleteNote(req, res) {
        // await res.render("showorder", await orderStore.delete(req.params.id));
    };
}
export const editNoteController = new EditNoteController();
