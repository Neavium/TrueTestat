import {noteStorage} from '../services/noteStorage.mjs'

export class IndexController {
    async showIndex(req, res) {
        let db = await noteStorage.all();
        res.render("index" , {layout: "layout", css: 'dark.css', title: 'Note Master',
             node: db});
    };

    createNote(req, res) {
        // res.send("Create Note: Not implemented yet, sorry");
        res.redirect("/note")
    }

    styleSwitch(req, res) {
        res.send("Style Switch: Not implemented yet, sorry");
    }

    sortFinishDate(req, res) {
        res.send("Sort by Finish Date: Not implemented yet, sorry");
    }

    sortCreateDate(req, res) {
        res.send("Sort by Creation Date: Not implemented yet, sorry");
    }

    sortImportance(req, res) {
        res.send("Sort by Importance: Not implemented yet, sorry");
    }

    hideFinished(req, res) {
        res.send("hide Finished: Not implemented yet, sorry");
    }

    editNote(req, res) {
        // res.send("editing not implemented yet");
        res.redirect("/note");
    }
}

export const indexController = new IndexController();