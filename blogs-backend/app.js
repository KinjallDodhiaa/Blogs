/** EXTERNAL DEPENDENCIES */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/**
 * DEPENDENCIES FROM LOWDB
 */
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

/** ROUTERS */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//import records router
const postsRouter = require("./routes/posts");


// CORS Security for the client website to disable same-orign-policy for only his website
const { setCors } = require("./middleware/security")

/** INIT */
var app = express();

/** LOGGING */
app.use(logger('dev'));

/**
 * SET UP THE LOWDB DATABASE
 */
//initialize the adapter to the mock db file
const adapter = new FileSync("data/db.json");
//initialize the lowdb to the mock db file
const db = low(adapter);
//add default entries to the database
db.defaults({posts:[]}).write();


/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**Set CORS TO OMIT SECURITY ERRORS */
app.use(setCors);

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));

/** ROUTES */
app.use('/', indexRouter);
app.use('/users', usersRouter);
//router path: '/posts'
app.use("/posts", postsRouter);

/** ERROR HANDLING */
app.use((err, req, res, next) => {
    //respond to the requestor with the error message
    res.status(500).send({
        error: {
            message: err.message
        }
    })
})


module.exports = app;
