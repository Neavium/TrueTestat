import {noteStorage} from '../services/noteStorage.mjs'

let cssStyle = "dark.css";

export class IndexController {
    async showIndex(req, res) {
        let db = await noteStorage.all();
        // console.log(db);
        res.render("index",
            {
                layout: "layout",
                css: req.userSettings.cssStyle,
                title: 'Note Master',
                node: db,
                req: req
            });
    };

    createNote(req, res) {
        res.redirect("/note/createNote")
    }

    styleSwitch(req, res) {
        if(req.userSettings.cssStyle === "dark.css"){
            res.redirect("/?cssStyle=light.css");
        }else{
            res.redirect("/?cssStyle=dark.css");
        }
    }

    async sortFinishDate(req, res) {
        await changeOrderQuery("dueUntilDate", req, res);
    }

    async sortCreateDate(req, res) {
        await changeOrderQuery("createdAtDate", req, res);
    }

    async sortImportance(req, res) {
        await changeOrderQuery("importance", req, res);
    }

    hideFinished(req, res) {
        if(req.userSettings.hideFinished === "false"){
            res.redirect("/?hideFinished=true");
        }else{
            res.redirect("/?hideFinished=false");
        }


        // let db = await noteStorage.getAllUnfinished();
        // res.render("index",
        //     {
        //         layout: "layout",
        //         css: req.userSettings.cssStyle,
        //         title: 'Note Master',
        //         node: db,
        //         req: req
        //     });
    }

    editNote(req, res) {
        res.redirect("/note/editNote/:id");
    }
}

function changeOrderQuery(orderBy, req, res){
    if(req.userSettings.orderBy === orderBy){
        if(req.userSettings.orderDirection === "1"){
            res.redirect("/?orderDirection=-1");
        }else{
            res.redirect("/?orderDirection=1");
        }
    }else{
        res.redirect("/?orderBy=" + orderBy + "&orderDirection=1");
    }
}



export const indexController = new IndexController();