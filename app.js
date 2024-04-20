require("dotenv").config({path: "./.env"});
const path = require('path');
const fs = require('fs');
const cors = require("cors");

const express = require('express');
const app = express();

//DBConnection

require("./models/database").connectDatbase();


//logger
const logger = require('morgan');
app.use(logger('dev'));

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// session and cookie parser

const session = require('express-session');
const cookieparser = require('cookie-parser');

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret : process.env.EXPRESS_SESSION_SECRET,
}));

app.use(cookieparser());


// CORS
app.use(require("cors")({ credentials: true, origin: true }));





// express file-upload
const fileupload = require('express-fileupload');
app.use(fileupload());


// routes
app.use('/', require('./routes/indexRoutes'));
app.use('/resume', require('./routes/resumeRoutes'));
app.use('/employe', require('./routes/employeRoutes'));


app.get('/_next/image', (req, res) => {
    // Extract the 'url' parameter from the query string
    const imageUrl = req.query.url;

    // Construct the file path based on the 'url' parameter and the location of your files
    const filePath = path.join(__dirname, 'public', 'static', imageUrl);
    const errFile = path.join(__dirname, 'public', 'static', '404.html');

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // If the file doesn't exist, return a 404 Not Found response
            res.status(404).send('File not found');
        } else {
            // If the file exists, send the file as the response
            res.sendFile(filePath);
        }
    });
});


// Serve HTML, CSS, JS, and image files
app.get('/:path(*)', (req, res) => {
    const requestedPath = req.params.path;
    const htmlFilePath = path.join(__dirname, 'public', 'static', requestedPath + '.html');
    const cssFilePath = path.join(__dirname, 'public', 'static', requestedPath);
    const errFile = path.join(__dirname, 'public', 'static', '404.html');

    fs.access(htmlFilePath, fs.constants.F_OK, (htmlErr) => {
        if (!htmlErr) {
            console.log('HTML file found:', htmlFilePath);
            res.sendFile(htmlFilePath);
        } else {
            fs.access(cssFilePath, fs.constants.F_OK, (cssErr) => {
                if (!cssErr) {
                    console.log('CSS file found:', cssFilePath);
                    res.sendFile(cssFilePath);
                } else {
                    res.sendFile(errFile);
                } 
                
            });
        }
    });

});
// error handling
const ErrorHandler = require("./utils/ErrorHandler");
const { genratedErrors } = require("./middlewares/errors");

app.all('*',(req,res,next)=>{
    next(new ErrorHandler(`Requested Url Not Found ${req.url}`, 404))

});

app.use(genratedErrors);





app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`))