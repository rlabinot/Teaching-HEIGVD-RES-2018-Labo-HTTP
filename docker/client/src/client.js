/*
* This is a HTTP client who sends GET and POST requests.
* It can send a JSON/XML/HTML payload to ask the current time with GET.
* It can send a JSON/XML/HTML payload to change the current time of the server.
*/

var protocol = require("./protocol"); // definition of the protocol
var request = require("request"); // library for HTTP requests
var moment = require("moment"); // library for time format

// JSON PART
// Define the headers for a GET request in JSON
const headersGetJson = {
    url: "http://" + protocol.IP + ":" + protocol.PORT,
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Accept-Charset": "utf-8"
    }
};

// function for the GET request in JSON
request(headersGetJson, function(error , response, body) {
    console.log("GET REQUEST JSON : ");
    console.log(body);
});



var dataJson = { time: moment().add(2, "hours")}; // Create a JSON payload

// Define the headers for a POST request in JSON
const headersPostJson = {
    url: "http://" + protocol.IP + ":" + protocol.PORT,
    method: "POST",
    body: dataJson,
    json: true,
    headers: {
        "Content-Type": "application/json",
        "Accept-Charset": "utf-8"
    }
};

// Send a POST request in JSON
request.post(headersPostJson, function(error, response, body){
    console.log("POST REQUEST JSON : ");
    console.log(body);
});


// XML PART
// Define the headers for a GET request in XML
const headersGetXml = {
    url: "http://" + protocol.IP + ":" + protocol.PORT,
    method: "GET",
    headers: {
        "Accept": "text/xml",
        "Accept-Charset": "utf-8"
    }
};

// function for a GET request in XML
request(headersGetXml, function(error , response, body){
    console.log("GET REQUEST XML : ");
    console.log(body);
});

// Create a XML data for the POST request
var dataXml = "<time>" + moment().add(2, "hours") + "</time>";

// Define the headers for a POST request in XML
const headersPostXml = {
    url: "http://" + protocol.IP + ":" + protocol.PORT,
    method: "POST",
    body: dataXml,
    headers: {
        "Content-Type": "text/xml",
        "Accept-Charset": "utf-8"
    }
};

// Send the XML data in a POST request
request.post(headersPostXml, function(error, response, body){
    console.log("POST REQUEST XML : ");
    console.log(body);
});

// HTML PART
// Define the headers for a GET request in HTML
const headersGetHtml = {
    url: "http://" + protocol.IP + ":" + protocol.PORT,
    method: "GET",
    headers: {
        "Accept": "text/html",
        "Accept-Charset": "utf-8"
    }
};

// function for a GET request in HTML
request(headersGetHtml, function(error , response, body){
    console.log("GET REQUEST HTML : ");
    console.log(body);
});