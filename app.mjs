import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-hbs';
import path from 'path';
import {indexRoutes} from "./routes/indexRoutes.mjs"
import {noteRoutes} from './routes/noteRoutes.mjs';
import {registerHelpers} from './utils/handlebar-util'
import {overrideMiddleware} from "./utils/method-override";


const app = express();
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));
registerHelpers(hbs);

//Custom helper for list entries of notes
hbs.registerHelper('listEntry', function (data, options) {
    if (data === undefined || data === null) {
        return options.inverse(this);
    }
    let str = "";
    for (let i = 0; i < data.length; i++) {
        str += "<form id=\"ListForm\">";
        str += "<a class=\"DueTo\">" + data[i]['dueUntilDate'] + "</a>";
        str += "<label class=\"FinishedLabel\" for=\"FinishedCheckbox\">Done";
        str += "<input id=\"FinishedCheckbox\" type=\"checkbox\" checked>"; // needs a checkbox field that has "checked" if so...
        str += "</label>";
        str += "<label class=\"NoteTitle\" for=\"TextArea\">Title</label>"; // needs a note title field
        str += "<textarea id=\"TextArea\">" + data[i]['noteContent'] + "</textarea>";
        let importanceStr = "";
        for (let imp = 0; imp < data[i]['importance']; imp++) {
            importanceStr += "*";
        }
        str += "<a class=\"Importance\">" + importanceStr + "</a>";
        str += "<input type=\"submit\" formmethod=\"get\" formaction=\"/editNote\" class=\"Button Edit\" value=\"Edit\">";
        str += "</form>";
    }
    return new hbs.SafeString(str);
    // noteContent":"noteContent",                      data[i]['noteContent']
    // "createdAtDate":{"$$date":1541706157184},        data[i]['createdAtDat']
    // "dueUntilDate":{"$$date":1541706157184},         data[i]['dueUntilDate']
    // "importance":5,                                  data[i]['importance']
    // "state":"OK",                                    data[i]['state']
    // "_id":"wmSKWhf4wCFm7UgA"                         data[i]['_id']
});

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
