"use strict";

const socket = io();
const data = "data";
socket.emit("event-name", data);

const stringToId = function (text) {
    return text.replace(" ", "");
};

const messageInput = document.getElementById("message");
messageInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        socket.emit("message", messageInput.value);
        messageInput.value = "";
    }
});

const tacheInput = document.getElementById("tache");
tacheInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        socket.emit("tache", tacheInput.value);
        tacheInput.value = "";
    }
});

const listeMessages = document.getElementById("messages");
const ajoutMessage = function (message) {
    const li = document.createElement("li");
    li.innerHTML = message;
    listeMessages.appendChild(li);
};

socket.on("message", ajoutMessage);
socket.on("messages", messages => messages.forEach(ajoutMessage));

function tacheSelectionnee(event) {
    console.log("ci dessous, l'id");
    console.log(event.target.id);
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
