import {noteStorage} from '../services/noteStorage.mjs'

export class EditNoteController {
    async saveNote(req, res) {
        res.redirect("/");
        console.log(req.body);
        await noteStorage.add(req.body.noteTitle, req.body.noteDescription, req.body.noteDueTo, req.body.noteImportance, req.body.noteDone);
    };

    async createNote(req, res) {
        res.render("createNote", {layout: "layout", css: "dark.css", title: "Create Note"});
    };

    async updateNote(req, res) {
        noteStorage.update(
            req.body.noteTitle,
            req.body.noteDescription,
            req.body.noteDueTo,
            req.body.noteImportance,
            req.body.noteDone,
            req.params.id);
        console.log("updating entry");
        res.redirect("/");
    }

    async editNote(req, res) {
        //todo: get note object from DB to populate Handlebars Template
        await res.render("editNote", Object.assign({}, {
            layout: "layout",
            css: "dark.css",
            title: "Edit Note"
        }, await noteStorage.get(req.params.id)));
    }

    async deleteNote(req, res) {
        //todo: delete note from DB
    };
}

export const editNoteController = new EditNoteController();
