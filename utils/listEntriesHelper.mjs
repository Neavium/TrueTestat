import hbs from "express-hbs";

export function listEntriesHelper(data, req, options) {
    //TODO maybe use noteEntry.hbs somehow instead of this function. Partial?
    if (data === undefined || data === null || data.length < 1) {
        return options.inverse(this);
    }
    let str = "";
    let hideFinished;
    if (req === undefined || req.userSettings === undefined) {
        hideFinished = "false";
    } else {
        hideFinished = req.userSettings.hideFinished;
    }
    for (let i = 0; i < data.length; i++) {
        if (!(hideFinished === "false" && (data[i]["done"] === "checked"))) {
            str += "<form id=\"ListForm\">";
            str += "<a class=\"DueTo\">" + data[i]['dueUntilDate'] + "</a>";
            str += "<label class=\"FinishedLabel\" for=\"FinishedCheckbox\">Done";
            str += "<input id=\"FinishedCheckbox\" type=\"checkbox\" " + data[i]['done'] + " onclick='return false' onkeydown='return false'>"; // needs a checkbox field that has "checked" if so...
            str += "</label>";
            str += "<label class=\"NoteTitle\" for=\"TextArea\">" + data[i]['noteTitle'] + "</label>"; // needs a note title field
            str += "<textarea id=\"TextArea\" disabled>" + data[i]['noteContent'] + "</textarea>";
            let importanceStr = "";
            for (let imp = 0; imp < data[i]['importance']; imp++) {
                importanceStr += '&#x2605';
            }
            str += "<a class=\"Importance\">" + importanceStr + "</a>";
            str += "<input type=\"submit\" formmethod=\"get\" formaction=\"/note/editNote/" + data[i]["_id"] + "\" class=\"Button Edit\" value=\"Edit\">";
            str += "</form>";
        }
    }
    if (str.length < 1) {
        return options.inverse(this);
    }
    return new hbs.SafeString(str);
}