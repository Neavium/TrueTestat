import {noteStorage} from '../services/noteStorage.mjs'

let cssStyle = "dark.css";

export class IndexController {
    async showIndex(req, res) {
        let db = await noteStorage.all();
        let theme = this.getTheme(req.params.theme);
        let cond = theme === "light";
        console.log(db);
        res.render("index" , {layout: "layout", theme: theme, title: 'Note Master', condition: cond,
             node: db});
    };

    createNote(req, res) {
        let theme = this.getTheme(req.params.theme);
        res.redirect("/note/createNote/" + theme);
    }

    styleSwitch(req, res) {
        let style = "/" + req.params.theme;
        res.redirect(style);
    }

    sortFinishDate(req, res) {
        //todo: sort by finish date
        res.send("Sort by Finish Date: Not implemented yet, sorry");
    }

    sortCreateDate(req, res) {
        //todo: sort by creation date
        res.send("Sort by Creation Date: Not implemented yet, sorry");
    }

    sortImportance(req, res) {
        //todo: sort by importance
        res.send("Sort by Importance: Not implemented yet, sorry");
    }

    hideFinished(req, res) {
        //todo: hide finished
        res.send("hide Finished: Not implemented yet, sorry");
    }

    editNote(req, res) {
        let theme = this.getTheme(req.params.theme);
        res.redirect("/note/editNote/:id/" + theme);
    }

    getTheme(req){
        let theme = "light";
        if(req === "dark"){
            theme = "dark";
        }
        return theme;
    }
}

export const indexController = new IndexController();