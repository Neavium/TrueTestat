// const Datastore = require('nedb');
import Datastore from 'nedb-promise'
// const db = new Datastore({filename: './data/notes.db', autoload: true});

export class Note {
    constructor(noteTitle, noteContent, dueUntilDate, importance) {
        this.noteTitle = noteTitle;
        this.noteContent = noteContent;
        this.createdAtDate = new Date();
        this.dueUntilDate = dueUntilDate;
        this.importance = importance;
        this.state = "OK";
    }
}

export class NoteStorage {
    constructor(db) {
        this.db = db || new Datastore({filename: './data/notes.db', autoload: true});
    }

    async add(noteTitle, noteContent, dueUntilDate, importance) {
        let order = new Order(noteTitle, noteContent, dueUntilDate, importance);
        return await this.db.insert(order);
    }

    async delete(id) {
        // await this.db.update({_id: id}, {$set: {"state": "DELETED"}});
        // return await this.get(id);
    }

    async get(id) {
        // return await this.db.findOne({_id: id});
    }

    async all() {
        // return await this.db.find({});
    }
}

export const noteStorage = new NoteStorage();


// function publicAddNote(noteTitle, noteContent, dueUntilDate, importance, callback)
// {
//     console.log("  publicAddOrder start");
//     let note = new Note(noteTitle, noteContent, dueUntilDate, importance);
//     db.insert(note, function(err, newDoc){
//         console.log("    insert");
//         if(callback){
//             callback(err, newDoc);
//         }
//     });
//     console.log("  publicAddNote end");
// }
//
// module.exports = {add:publicAddNote};
