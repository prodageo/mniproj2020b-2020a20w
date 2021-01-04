"use strict";

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const requestStats = require('request-stats');
const app = express();
app.use("/client", express.static(path.join(__dirname, "/client")));
app.use(bodyParser.urlencoded({extended: true}));
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const fs = require('fs');
const port = 8000;

const data = "data";
const messages = [];
const taches = [];
const tachesSelectionnees = [];
const path_file_mesure_time = "mesures_temps_requetes.txt";
const path_file_mesure_size = "mesures_taille_requetes.txt";

var startTime = null;
var requestsSize = 0;
// var stats = requestStats(http);

// setInterval(() => {
//     fs.appendFile(path_file_mesure_size, requestsSize+"\n", function (err) {
//         if (err) throw err;
//         requestsSize = 0;
//     });
// }, 30000);

// stats.on('complete', function (details) {
//     var size = details.req.bytes;
//     console.log(JSON.stringify(size));
//     requestsSize += size;
// });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/index.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/login.html"));
});

app.post("/login", (req, res) => {
    const identifiants = req.body;
    if ((identifiants.identifiant == "admin") && (identifiants.password == "admin")) {
        res.sendFile(path.join(__dirname, "/client/admin.html"));
    } else {
        res.statusCode = "403";
        res.end();
    }
}); 

app.post("/admin", (req, res) => {
    const tachesInputs = req.body;
    for (const tacheInput in tachesInputs) {
        taches.push(tachesInputs[tacheInput]);
    }
    res.redirect("/conference");
}); 

app.get("/conference", (req, res) => {
    res.sendFile(path.join(__dirname,"/client/conference.html"));
});

io.on("connection", socket => {
    io.emit("event-name", data); // Broadcast
    socket.broadcast.emit(data); // Broadcast sauf emetteur

    socket.emit("messages", messages);
    socket.emit("taches", taches);
    socket.emit("taches-selectionnees", tachesSelectionnees);

    socket.on("message", message => {
        messages.push(message);
        startTime = Date.now();
        io.emit("message", message);
    });

    socket.on("accuse", accuse => {
        var endTime = Date.now();
        var diff = endTime - startTime;
        fs.appendFile(path_file_mesure_time, diff+"\n", function (err) {
            if (err) throw err;
        });
    });

    socket.on("tache", tache => {
        taches.push(tache);
        io.emit("tache", tache);
    });

    socket.on("tache-selectionnee", tacheId => {
        tachesSelectionnees.push(tacheId);
        io.emit("tache-selectionnee", tacheId);
    });
});


http.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
