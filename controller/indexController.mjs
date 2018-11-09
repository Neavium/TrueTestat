import {noteStorage} from '../services/noteStorage.mjs'

let cssStyle = "dark.css";

export class IndexController {
    async showIndex(req, res) {
        let db = await noteStorage.all();
        res.render("index" , {layout: "layout", css: 'dark.css', title: 'Note Master',
             node: db});
    };

    createNote(req, res) {
        res.redirect("/note/createNote")
    }

    styleSwitch(req, res) {
        cssStyle=cssStyle==="dark.css"?"light.css":"dark.css";
        res.render("index" ,{layout: "layout", css: cssStyle, title: 'Note Master',
            node: [
                {"noteTitle":"blub","noteContent":"blub","createdAtDate":{"$$date":1541707091718},"dueUntilDate":"2017-09-07","importance":"2","state":"OK","_id":"JJWFq8dZFoiHZPow"},
                {"noteTitle":"testTitle","noteContent":"testDescription","createdAtDate":{"$$date":1541706629508},"dueUntilDate":"1337-11-21","importance":"1","state":"OK","_id":"ZwKFFNH7uhfBesCr"}
            ]
        });
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
        res.send("hide Finished: Not implemented yet, sorry");
    }

    editNote(req, res) {
        res.redirect("/note/editNote");
    }
}

export const indexController = new IndexController();