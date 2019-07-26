// Dependencies
var mongoose = require("mongoose");

// Reference to the Schema constructor
var schema = mongoose.Schema;

// Creating a new ArticleSchema object
var ArticleSchema = new Schema({
    title: {
        
    },

    link: {
        type: String,
        required: true
    },

    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Creating a model using mongoose
var Article = mongoose.model("Article", ArticleSchema);

// Exports the model
module.exports = Article;