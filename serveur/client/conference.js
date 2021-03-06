"use strict";

const socket = io();

const stringToId = function (text) {
    return text.replace(" ", "");
};

var messageSent = "";

const messageInput = document.getElementById("message");
messageInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        socket.emit("message", messageInput.value);
        messageSent = messageInput.value;
        messageInput.value = "";
    }
});

const listeMessages = document.getElementById("messages");
const ajoutMessage = function (message) {
    const li = document.createElement("li");
    li.innerHTML = message;
    listeMessages.appendChild(li);
};

// socket.on("message", ajoutMessage);
socket.on("message", message => {
    ajoutMessage(message);
    if (message != messageSent) {
        socket.emit("accuse");
    } else {
        messageSent = "";
    }
})
socket.on("messages", messages => messages.forEach(ajoutMessage));

function tacheSelectionnee(event) {
    socket.emit("tache-selectionnee", event.target.id);
}

const listeTaches = document.getElementById("taches");
const ajoutTache = function (tache) {
    const li = document.createElement("li");
    li.innerHTML = tache;
    li.id = stringToId(tache);
    li.addEventListener("dblclick", tacheSelectionnee);
    listeTaches.appendChild(li);
};

const surlignerTache = function (tacheId) {
    const tache = document.getElementById(tacheId);
    tache.style.backgroundColor = "yellow";
};

socket.on("tache", ajoutTache);
socket.on("taches", taches => taches.forEach(ajoutTache));
socket.on("tache-selectionnee", surlignerTache);
socket.on("taches-selectionnees", tachesSelectionnees => tachesSelectionnees.forEach(surlignerTache));
