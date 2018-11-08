import {noteStorage} from '../services/noteStorage.mjs'

export class EditNoteController {
    showIndex(req, res) {
        res.render("index");
    };

    createOrder(req, res) {
        res.render("editNote");
    };

    async saveNote(req, res) {
        await res.render("index", await noteStorage.add("noteTitle", "noteContent", new Date(), 5));
    };

    async showNote(req, res) {
        // await res.render("showorder", await orderStore.get(req.params.id));
    };

    async deleteNote(req, res) {
        // await res.render("showorder", await orderStore.delete(req.params.id));
    };
}
export const editNoteController = new EditNoteController();
