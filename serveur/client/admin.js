"use strict";

let compteur = 0;

const initAdmin = function () {
    const listeTaches = document.getElementById("taches");
    const ajoutTacheInput = function (name) {
        const li = document.createElement("li");
        const tacheInput = document.createElement("input");
        tacheInput.type = "text";
        tacheInput.name = name;
        li.appendChild(tacheInput);
        listeTaches.appendChild(li);
    };
    
    const newTacheInput = document.getElementById("tache");
    newTacheInput.addEventListener("click", event => {
        compteur++;
        ajoutTacheInput(compteur);
    });
};

const loginForm = document.forms[0];
const chargerAdmin = function (event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName("body")[0].innerHTML = this.responseText;
            initAdmin();
        }
    };
    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`identifiant=${loginForm.identifiant.value}&password=${loginForm.password.value}`);
};
loginForm.addEventListener("submit", chargerAdmin);
