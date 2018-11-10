import {noteStorage} from '../services/noteStorage.mjs'

export class EditNoteController {

    async saveNote(req, res) {
        let theme = this.getTheme(req.params.theme);
        res.redirect("/" + theme);
        console.log(req.body);
        let done = "";
        if(req.body.noteDone === "on"){
            done = "checked";
        }
        await noteStorage.add(req.body.noteTitle, req.body.noteDescription, req.body.noteDueTo, req.body.noteImportance, done);
    };

    async createNote(req, res) {
        let theme = this.getTheme(req.params.theme)
        res.render("createNote", {layout: "layout", theme: theme, title: "Create Note"});
    };

    async updateNote(req, res) {
        let done = "";
        if(req.body.noteDone === "on"){
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
        let theme = this.getTheme(req.params.theme);
        res.redirect("/" + theme);
    }

    async editNote(req, res) {
        //todo: get note object from DB to populate Handlebars Template
        let theme = this.getTheme(req.params.theme);
        await res.render("editNote", Object.assign({}, {
            layout: "layout",
            theme: theme,
            title: "Edit Note",
        }, await noteStorage.get(req.params.id)));
    }

    async deleteNote(req, res) {
        //todo: delete note from DB
    };

    getTheme(req){
        let theme = "light";
        if(req === "dark"){
            theme = "dark";
        }
        return theme;
    }
}

export const editNoteController = new EditNoteController();
