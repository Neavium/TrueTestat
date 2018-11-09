import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-hbs';
import path from 'path';
import {indexRoutes} from "./routes/indexRoutes.mjs"
import {noteRoutes} from './routes/noteRoutes.mjs';
import {registerHelpers} from './utils/handlebar-util'
import {overrideMiddleware} from "./utils/method-override";
import session from "express-session";
import {sessionUserSettings} from "./utils/sessionUserSettings";

const app = express();

app.engine('hbs', hbs.express4({defaultLayout: './views/layout'}));
app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));
registerHelpers(hbs);

//Custom helper for list entries of notes
hbs.registerHelper('listEntry', function (data, req, options) {
    if (data === undefined || data === null || data.length < 1) {
        return options.inverse(this);
    }
    let str = "";
    let hideFinished
    if(req === undefined || req.userSettings === undefined){
        hideFinished = "false";
    }else{
        hideFinished = req.userSettings.hideFinished;
    }
    for (let i = 0; i < data.length; i++) {
        if(!(hideFinished === "false" && (data[i]["done"] === "checked"))){
            str += "<form id=\"ListForm\">";
            str += "<a class=\"DueTo\">" + data[i]['dueUntilDate'] + "</a>";
            str += "<label class=\"FinishedLabel\" for=\"FinishedCheckbox\">Done";
            str += "<input id=\"FinishedCheckbox\" type=\"checkbox\" " + data[i]['done'] + " >"; // needs a checkbox field that has "checked" if so...
            str += "</label>";
            str += "<label class=\"NoteTitle\" for=\"TextArea\">" + data[i]['noteTitle'] + "</label>"; // needs a note title field
            str += "<textarea id=\"TextArea\" readonly>" + data[i]['noteContent'] + "</textarea>";
            let importanceStr = "";
            for (let imp = 0; imp < data[i]['importance']; imp++) {
                importanceStr += "*";
            }
            str += "<a class=\"Importance\">" + importanceStr + "</a>";
            str += "<input type=\"submit\" formmethod=\"get\" formaction=\"/note/editNote/" + data[i]["_id"] + "\" class=\"Button Edit\" value=\"Edit\">";
            str += "</form>";
        }

    }
    return new hbs.SafeString(str);
});

app.use(session({secret: 'casduichasidbnuwezrfinasdcvjkadfhsuilfuzihfioda', resave: false, saveUninitialized: true}));
app.use(sessionUserSettings);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(overrideMiddleware);

app.use('/', indexRoutes);
app.use("/note", noteRoutes);

app.use(express.static(path.resolve('public')));

const hostname = '127.0.0.1';
const port = 3001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

