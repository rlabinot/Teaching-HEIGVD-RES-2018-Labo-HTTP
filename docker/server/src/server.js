/*
* This is a HTTP time server. It listen GET and POST request in a JSON/XML/HTML format.
* When the server occures a GET request, he will give the current time in a LTS format.
* When the server occures a POST request, he will change his time with the given time 
* from request in a LTS format.
*/

// Adding libraries
var protocol = require("./protocol");
var moment = require("moment");
var bodyParser = require("body-parser");
var express = require("express");
var server = express();
require("body-parser-xml")(bodyParser);


var difference = 0;

// Define the different parsers
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(bodyParser.xml());


// On receive of a GET request
server.get('/', (request, response) => {
    console.log("GET ");

    switch (request.headers["accept"]) {
        case "application/json":
            console.log("content-type -> json");
            response.json({
                "Current time": moment().add(difference).format("LTS")
            });
            break;
        case "text/xml":
            console.log("content-type -> xml");
            response.send("<time>" + moment().add(difference).format("LTS") + "</time>");
            break;
        case "text/html":
            console.log("content-type -> html");
            response.send("<html>\n" +
                "<header></header>\n" +
                "\t<body>\n" +
                "\t\t<div>" + moment().add(diff).format("LTS") + "</div>\n" +
                "\t</body>\n" +
                "</html>");
            break;
        default:
            console.log("GET ERROR : not a Json, XML or HTML request");
    }
});

// On receive of a POST request
server.post('/', (request, response) => {
    console.log("POST ");

    // Calculating the difference with current time and given time
    postDate = moment(request.body.time);
    currentDate = moment();
    difference = postDate.diff(currentDate);

    switch (request.headers["content-type"]) {
        case "application/json":
            console.log("content-type -> json");
            response.json({
                "Current-time": moment().add(difference).format("LTS")
            });
            break;
        case "text/xml":
            console.log("content-type -> xml");
            response.send("<time>" + moment().add(difference).format("LTS") + "</time>");
            break;
        case "text/html":
            console.log("content-type -> html");
            response.send("<html>\n" +
                "<header></header>\n" +
                "\t<body>\n" +
                "\t\t<div>" + moment().add(diff).format("LTS") + "</div>\n" +
                "\t</body>\n" +
                "</html>");
            break;
        default:
            console.log("POST ERROR : not a Json, XML or HTML request");
    }
});

// Launching the time server
console.log("Waiting connection on port : " + protocol.PORT);
server.listen(protocol.PORT);