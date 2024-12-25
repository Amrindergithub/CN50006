var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Exercise 1: Basic Express Application
app.get('/', function (req, res) {
    res.send("Hello, this is my first Express application");
});

// Exercise 2: Adding Additional Routes
app.get('/about', function (req, res) {
    res.send("This is a basic Express application");
});

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
});

// Exercise 3: Serving JSON Data
app.get('/GetStudents', function (req, res) {
    fs.readFile(__dirname + "/Student.json", 'utf8', function (err, data) {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            res.json({
                status: true,
                data: JSON.parse(data)
            });
        }
    });
});

// Exercise 3: Searching JSON Data by ID
app.get('/GetStudentid/:id', function (req, res) {
    fs.readFile(__dirname + "/Student.json", 'utf8', function (err, data) {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            var students = JSON.parse(data);
            var student = students["Student" + req.params.id];
            if (student) {
                res.json(student);
            } else {
                res.status(404).send({ error: "Student not found" });
            }
        }
    });
});

// Exercise 4: Serving an HTML Form
app.get('/studentinfo', function (req, res) {
    res.sendFile('StudentInfo.html', { root: __dirname });
});

// Exercise 4: Handling Form Submission (POST)
app.post('/submit-data', function (req, res) {
    // Collect form data
    var name = req.body.firstName + ' ' + req.body.lastName;
    var age = req.body.myAge;
    var gender = req.body.gender;
    var qualifications = req.body.Qual;

    // Log the form data (for testing purposes)
    console.log(req.body);

    // Respond with the submitted data
    res.json({
        status: true,
        message: "Form Details",
        data: {
            name: name,
            age: age,
            gender: gender,
            qualifications: qualifications
        }
    });
});

// Start the server on port 5001
app.listen(5001, function () {
    console.log("Server is running on port 5001");
});