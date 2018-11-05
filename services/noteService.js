const notes = [];

const Datastore = require('nedb');
const db = new Datastore({filename: './data/notes.db', autoload: true})