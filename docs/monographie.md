---
consigne: http://prodageo.insa-rouen.fr/casimono/sujetprojmd/consignes.html
---
# Monographie - {Web temps réel}

## Cartouche

 - Code du sujet : 20W 
 - Code de l'alliance : 2020A20W
 - Liste des équipes
   - E03
     - Boulier, Florent (FloBouboule)
     - Lecordier, Jean (jlecordier)
     - Picard, Lisa (lisapicard)
  
## Partie A

### A0 : Introduction.

La technique que nous allons étudier dans ce projet est celle du **web temps réel**. En effet, de nombreuses applications utilisent aujourd'hui cette technique pour mettre à jour un écran sans qu'aucune interaction utilisateur ne l'ait demandé.

L'objectif de ce projet est de créer une application web permettant à des anciens ASI répartis sur plusieurs sites distants de passer en revue une liste de tâches, pour organiser une manifestation comme la journée des métiers.

*Le cas d'utilisation est le suivant :*
Un utilisateur maître M0 se connecte à l’application web A depuis un navigateur 1 et visualise une liste de tâches (vide).
Il saisit 3 tâches T1, T2, T3.
L’utilisateur M démarre la conférence.
Deux utilisateurs observateurs O1 et O2 se connectent à l’application web A depuis les navigateurs 2 et 3.
Ils visualisent la liste des tâches.
L’utilisateur M surligne la tâche T1.
Les deux utilisateurs O1 et O2 voient la ligne surlignée sans qu’ils n’aient effectué aucune intervention.
O1 saisit un commentaire.
Les deux autres utilisateurs M0 et O2 voient le commentaire.

### A1. Glossaire et Mots-clés.

* **Web**
* **Temps réel**
* **Interaction utilisateur**
* **Navigateur**
* **Rafraîchissement**
* **Liste de tâches**
* **ajax-reverse**
* **WebSockets**
* **XMPP**
* **PubSubHubbub**

### A2. Webographie

* [WebSockets](https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API)
* [XMPP Overview](https://xmpp.org/about/technology-overview.html)
* [What is PubSubHubbub and how does it work?](https://www.programmableweb.com/news/what-pubsubhubbub-push-styled-api-and-how-does-it-work/analysis/2017/04/03)
* [Reverse-Ajax](https://www.ibm.com/developerworks/library/wa-reverseajax1/index.html)

### A3. Bibliographie

* **Comet and Reverse Ajax**, Dennis McCarthy, Chris Crane, *What are Comet and Reverse Ajax?* (p.1-9), *Simple Ways to achieve Push* (p.11-31)
* **Ajax Patterns and Best Practices**, Christian Gross, *Persistent Communications Pattern* (p.225-263)
* **Ajax: The Complete Reference**, Thomas A. Powell, *Networking considerations* (p.231-381)

### A4. Acteurs

* **Google** :

Google LLC est une entreprise américaine de services technologiques fondée en 1998 en Californie, par Larry Page et Sergey Brin. Les services qu'elle propose sont nombreux : courrier électronique, moteur de recherche, publicité en ligne, cloud, édition et collaboration (Google Docs, Sheets, Slides).

En 2009, Google a annoncé le lancement d'une fonction de recherche en temps réel. Cette fonction sert à chercher les termes entrés par l'utilisateur sur les pages Twitter, Facebook et MySpace. Les résultats sont classés par pertinence (nombre d'amis s'il s'agit d'un compte Facebook, nombre de retweets pour Twitter).

* **World Wide Web Consortium** :

Le World Wide Web Consortium, W3C, est un organisme de standardisation à but non lucratif, fondé en 1994. Il a pour objectif de promouvoir la compatibilité des technologies Web (HTML, XML, CSS, SVG...).

Le W3C a contribué au développement en 2011 de WebRTC (Web Real-Time Communication), une interface de programmation JavaScript qui permet la communication en temps réel. Elle permet notamment le partage de fichiers en peer-to-peer.

* **Internet Engineering Task Force** :

L'Internet Engineering Task Force (IETF) est un organisme de normalisation à but non lucratif, fondé en 1986. L'objectif de cette organisation est d'élaborer et de promouvoir des standards internet.

XMPP (Extensible Messaging and Presence Protocol) est un ensemble de protocoles standards de l'IETF, très utilisé pour le web temps réel.

L'IETF a également contribué au développement de WebRTC. Leur livre blanc sur les technologies Web en temps réel s'intitule [Web Real-Time Communcation Use Cases and Requirements](https://www.rfc-editor.org/info/rfc7478), est a été co-écrit par C. Holmberg, S. Hakansson et G. Eriksson.

### A5. Facteurs qualité

* Efficacité d'exécution
* Indépendance machine
* Efficacité de stockage

### A6. Indicateurs qualité

**Efficacité d'exécution** :

* Indicateurs de base : fiabilité, facilité d'utilisation
* Indicateur dérivé : efficacité

**Indépendance machine** :

* Indicateurs de base : portabilité, fiabilité
* Indicateur dérivé : interopérabilité

**Efficacité de stockage** :

* Indicateurs de base : rendement, fiabilité
* Indicateur dérivé : exactitude

### A7. Références théoriques

**Ajax-Reverse** [(IBM)](https://www.ibm.com/developerworks/library/wa-reverseajax1/index.html) :

Ce concept a été introduit par Alex Russel et Joe Walker. Il s'agit d'un mode de fonctionnement où le serveur remonte de l'information au client (et non l'inverse), sans que celui-ci ne l'ait demandé explicitement. Il repose sur le mécanisme du long-polling : La requête HTTP peut rester en attente (d'un évenement, d'un timeout), dans quel cas elle se clot.

![Ajax-Reverse](https://www.ibm.com/developerworks/library/wa-reverseajax1/fig01.gif)

**WebSockets** [(mozilla)](https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API)

**XMPP** [(xmpp)](https://xmpp.org/about/technology-overview.html)

**PubSubHubbub** [(programmableweb)](https://www.programmableweb.com/news/what-pubsubhubbub-push-styled-api-and-how-does-it-work/analysis/2017/04/03)

## Partie B

### B1. Approche technique

### B2. Solutions technologiques concurrentes

### B3. Solutions retenues

### B4. Liste de métriques

### B5. Découpage (WBS) pour réalisation des prototypes

## Partie C

### C1. Architecture solution W

### C2. Architecture solution X

### C3. Architecture solution Y

### C4. Architecture solution Z
