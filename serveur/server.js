"use strict";

const path = require("path");
const express = require("express");
const app = express();
app.use("/client", express.static(path.join(__dirname, "/client")));
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = 8000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/client/index.html"));
});

const data = "data";
const messages = [];
const taches = [];
const tachesSelectionnees = [];

io.on("connection", socket => {
    io.emit("event-name", data); // Broadcast
    socket.broadcast.emit(data); // Broadcast sauf emetteur

    socket.emit("messages", messages);
    socket.emit("taches", taches);
    socket.emit("taches-selectionnees", tachesSelectionnees);

    socket.on("message", message => {
        messages.push(message);
        io.emit("message", message);
    });

    socket.on("tache", tache => {
        taches.push(tache);
        io.emit("tache", tache);
    });

    socket.on("tache-selectionnee", tacheId => {
        console.log(tacheId);
        tachesSelectionnees.push(tacheId);
        io.emit("tache-selectionnee", tacheId);
    });
});


http.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
