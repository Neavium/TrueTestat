import {noteStorage} from '../services/noteStorage.mjs'

export class EditNoteController {
    showIndex(req, res) {
        res.render("index");
    };

    createNote(req, res) {
        res.render("createNote", {layout: "layout", css: "dark.css"});
    };

    async saveNote(req, res) {
        res.redirect("/");
        console.log(req.body);
        await noteStorage.add(req.body.noteTitle, req.body.noteDescription, req.body.noteDueTo, req.body.noteImportance, req.body.noteDone);
    };

    async showNote(req, res) {
        let note = noteStorage.get(req.query.id);
        let imp = "";
        switch (note.importance) {
            case 1: imp = "importance1"; break;
            case 2: imp = "importance2"; break;
            case 3: imp = "importance3"; break;
            case 4: imp = "importance4"; break;
            case 5: imp = "importance5"; break;
            default: imp = "";
        }
        let checked = "";
        if(note.done){
            checked = "checked";
        }
        res.render("editNote", {layout: "layout", css: "dark.css" ,
            noteTitle: note.noteTitle,
            description: note.noteDescription,
            imp: "selected",
            date: note.dueUntilDate,
            NoteDoneCheckbox: checked});
        //await res.render("showorder", await orderStore.get(req.params.id));
    };

    async deleteNote(req, res) {
        // await res.render("showorder", await orderStore.delete(req.params.id));
    };
}
export const editNoteController = new EditNoteController();
