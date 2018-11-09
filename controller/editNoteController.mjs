import {noteStorage} from '../services/noteStorage.mjs'

export class EditNoteController {
    async saveNote(req, res) {
        res.redirect("/");
        console.log(req.body);
        await noteStorage.add(req.body.noteTitle, req.body.noteDescription, req.body.noteDueTo, req.body.noteImportance, req.body.noteDone);
    };

    async createNote(req, res) {
        res.render("createNote", {layout: "layout", title: "Create Note"});
    };

    async updateNote(req, res){
        //todo: update DB with new note information
        //bsp: await res.render("showorder", await orderStore.get(req.params.id));
        console.log("updating entry");
        res.redirect("/");
    }

    async editNote(req, res){
        //todo: get note object from DB for Handlebars Template
        await res.render("editNote", {layout: "layout", title: "Edit Note"});
    }

    async deleteNote(req, res) {
        //todo: delete note from DB
    };
}
export const editNoteController = new EditNoteController();
