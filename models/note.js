// Dependencies
var mongoose = require("mongoose");

// Referring to the schema
var Schema = mongoose.Schema;

// Creating a new schema object
var NoteSchema = new Schema({
    title: String,
    body: String
});

// Using mongoose to create the model
var Note = mongoose.model("Note", NoteSchema);

// Exports to the "Note" model
module.exports = Note;