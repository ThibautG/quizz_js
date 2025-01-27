// on récupère les bonnes et les mauvaises réponses dans des variables
let reponsesVraies = document.querySelectorAll(".btnR");
let reponsesFausses = document.querySelectorAll(".btnF");

// récupérer le dernier bouton pour afficher résultat sur clique
let btn10 = document.querySelectorAll(".btn10");

// on déclare un compteur initialisé à 0 pour les bonnes réponses
let compt = 0;

// appliquer la couleur de fond correspondant à la réponse cliquée
reponsesVraies.forEach((rep) => {
    rep.addEventListener("click", () => {
        rep.style.background = "green";
        compt += 1;
})

reponsesFausses.forEach((rep) => {
    rep.addEventListener("click", () => {
        rep.style.background = "red";
    })
})

// affichage du résultat quand dernière question répondue
btn10.forEach((bouton) => {
    bouton.addEventListener("click", () => {
        document.getElementById("message").innerHTML = `
        <h3>Vous avez eu ${compt} bonnes réponses sur 10</h3>`;    })
    })
})