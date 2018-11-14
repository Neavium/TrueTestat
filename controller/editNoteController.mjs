import {noteStorage} from '../services/noteStorage.mjs'

export class EditNoteController {

    async saveNote(req, res) {
        res.redirect("/");
        console.log(req.body);
        let done = "";
        if (req.body.noteDone === "on") {
            done = "checked";
        }
        await noteStorage.add(req.body.noteTitle, req.body.noteDescription, req.body.noteDueTo, req.body.noteImportance, done);
    };

    async createNote(req, res) {
        res.render("createNote",
            {
                layout: "layout",
                css: req.userSettings.cssStyle,
                title: "Create Note"
            });
    };

    async updateNote(req, res) {
        console.log(req.body.noteDone);
        let done = "";
        if (req.body.noteDone === "on") {
            done = "checked";
        }
        noteStorage.update(
            req.body.noteTitle,
            req.body.noteDescription,
            req.body.noteDueTo,
            req.body.noteImportance,
            done,
            req.params.id);
        console.log("updating entry");
        res.redirect("/");
    }

    async editNote(req, res) {
        await res.render("editNote", Object.assign({}, {
            layout: "layout",
            css: req.userSettings.cssStyle,
            title: "Edit Note",
        }, await noteStorage.get(req.params.id)));
    }
}

export const editNoteController = new EditNoteController();
