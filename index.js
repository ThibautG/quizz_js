// récupération de chaque bouton dans une variable correspondante
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn10 = document.getElementById("btn-10");
const btn11 = document.getElementById("btn-11");
const btn12 = document.getElementById("btn-12");
const btn13 = document.getElementById("btn-13");
const btn14 = document.getElementById("btn-14");
const btn15 = document.getElementById("btn-15");
const btn16 = document.getElementById("btn-16");
const btn17 = document.getElementById("btn-17");
const btn18 = document.getElementById("btn-18");
const btn19 = document.getElementById("btn-19");
const btn20 = document.getElementById("btn-20");

let compt = 0;


// appliquer la couleur de fond correspondant à la réponse quand on clique dessus sur le bouton
btn1.addEventListener("click", () => {
    btn1.style.background = "green";
    compt += 1;
})
btn2.addEventListener("click", () => {
    btn2.style.background = "red";
})
btn3.addEventListener("click", () => {
    btn3.style.background = "red";
})
btn4.addEventListener("click", () => {
    btn4.style.background = "green";
    compt += 1;
})
btn5.addEventListener("click", () => {
    btn5.style.background = "green";
    compt += 1;
})
btn6.addEventListener("click", () => {
    btn6.style.background = "red";
})
btn7.addEventListener("click", () => {
    btn7.style.background = "green";
    compt += 1;
})
btn8.addEventListener("click", () => {
    btn8.style.background = "red";
})
btn9.addEventListener("click", () => {
    btn9.style.background = "red";
})
btn10.addEventListener("click", () => {
    btn10.style.background = "green";
    compt += 1;
})
btn11.addEventListener("click", () => {
    btn11.style.background = "green";
    compt += 1;
})
btn12.addEventListener("click", () => {
    btn12.style.background = "red";
})
btn13.addEventListener("click", () => {
    btn13.style.background = "green";
    compt += 1;
})
btn14.addEventListener("click", () => {
    btn14.style.background = "red";
})
btn15.addEventListener("click", () => {
    btn15.style.background = "red";
})
btn16.addEventListener("click", () => {
    btn16.style.background = "green";
    compt += 1;
})
btn17.addEventListener("click", () => {
    btn17.style.background = "red";
})
btn18.addEventListener("click", () => {
    btn18.style.background = "green";
    compt += 1;
})
btn19.addEventListener("click", () => {
    btn19.style.background = "green";
    compt += 1;
    alert(`Vous avez eu ${compt} bonnes réponses sur 10`);
})
btn20.addEventListener("click", () => {
    btn20.style.background = "red";
    alert(`Vous avez eu ${compt} bonnes réponses sur 10`);
})


// afficher le compteur de bonnes réponses => directement à l'intérieur des derniers addEventListener