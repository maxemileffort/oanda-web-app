const express   = require('express'),
      mongoose  = require('mongoose'),
      bcrypt    = require('bcrypt'),
      async     = require('async');
      
const app = express();
app.use(express.json());

mongoose.Promise = global.Promise;

const { PORT, DATABASE_URL } = require('./config');
const { User, TickData } = require('./models');


app.use(express.static('public'));
//====================
//GET endpoints
//====================
//serves landing page
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index.html");
});

//====================
//Catchall endpoint
//====================
app.get('/*', function (req, res) {
    let message = "Page not found."
    res.status(404).send(message);
});

let server;

function runServer(dbUrl, port) {
    return new Promise((resolve, reject) => {
        mongoose.connect(dbUrl, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log(`Listening on localhost:${port}`);
                resolve();
            }).on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

if (require.main === module) {
    runServer(DATABASE_URL, PORT).catch(err => console.error(err));
}

function closeServer() {
    return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    }));
}

module.exports = { app, runServer, closeServer };