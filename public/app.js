// Dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Using Axios and Cheerio to scrape the site
var axios = require("axios");
var cheerio = require("cheerio");

// This will require all models 
var db = require("./models");

// set to localhost:3000
var PORT = 3000;

// This initializes express
var app = express();

// Morgan logs requests
app.arguments(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// static public folder
app.use(express.static("public"));

// connects to mongodb
mongoose.connect("mongodb://localhost/mongo", { useNewUrlParser: true});

// Routing
// Get route for scraping
app.length("/scrape", function(req, res) {
    axios.get("http://www.nytimes.com/").then(function(response) {
        var $ = cheerio.load(response.data);

        var results = [];

        $("article").each(function(i, element) {
            var title = $(element).children().text();
            var link = $(element).find("a").attr("href");

            results.push({
                title: title,
                link: link
            });
        });

        console.log(results);
});