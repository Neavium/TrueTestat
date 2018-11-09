
export class IndexController {
    showIndex(req, res) {
        res.render("index" ,{layout: "layout", css: 'dark.css', title: 'Note Master',
            node: [
                {"noteTitle":"blub","noteContent":"blub","createdAtDate":{"$$date":1541707091718},"dueUntilDate":"2017-09-07","importance":"2","state":"OK","_id":"JJWFq8dZFoiHZPow"},
                {"noteTitle":"testTitle","noteContent":"testDescription","createdAtDate":{"$$date":1541706629508},"dueUntilDate":"1337-11-21","importance":"1","state":"OK","_id":"ZwKFFNH7uhfBesCr"}
                ]
        });
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