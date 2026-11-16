"use strict"; // Mode strict (slide 51)

// Tableau de chaînes de caractères (slide 38), const (slide 51)
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Objet avec des propriétés (slide 39)
const etudiant = { nom: "John", prenom: "DOE", age: 30 };

// Tableau d'objets (slide 40)
const etudiantsObjets = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Déclaration d'une fonction (slide 45)
function f1() {
    // Boucle for..of pour parcourir le tableau (slide 44), affichage avec console.log (slide 33)
    for (const e of etudiants) {
        console.log(e);
    }
}

function f2() {
    // Affichage de l'objet dans la console (slides 33 et 39)
    console.log(etudiant);
}

function f3() {
    // Boucle for..of sur un tableau d'objets (slides 40 et 44)
    for (const e of etudiantsObjets) {
        // Accès aux propriétés de l'objet (slide 39) et concaténation avec + (slide 41)
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}