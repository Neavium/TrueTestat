// const Datastore = require('nedb');
import Datastore from 'nedb-promise'

// const db = new Datastore({filename: './data/notes.db', autoload: true});

export class Note {
    constructor(noteTitle, noteContent, dueUntilDate, importance, done) {
        this.noteTitle = noteTitle;
        this.noteContent = noteContent;
        this.createdAtDate = new Date();
        this.dueUntilDate = dueUntilDate;
        this.importance = importance;
        this.done = done;
        this.state = "OK";
    }
}

export class NoteStorage {
    constructor(db) {
        this.db = db || new Datastore({filename: './data/notes.db', autoload: true});
    }

    async add(noteTitle, noteContent, dueUntilDate, importance, done) {
        let note = new Note(noteTitle, noteContent, dueUntilDate, importance, done);
        return await this.db.insert(note);
    }

    async update(noteTitle, noteContent, dueUntilDate, importance, done, id) {
        await this.db.update({_id: id},
            {
                $set: {
                    "noteTitle": noteTitle,
                    "noteContent": noteContent,
                    "dueUntilDate": dueUntilDate,
                    "importance": importance,
                    "done": done
                }
            });
    }

    async delete(id) {
        // await this.db.update({_id: id}, {$set: {"state": "DELETED"}});
        // return await this.get(id);
    }

    async get(id) {
        return await this.db.findOne({_id: id});
    }

    async all() {
        return await this.db.find({});
    }
}

export const noteStorage = new NoteStorage();