"use strict"; // Mode strict (slide 51)

// Tableau d'objets "Students" (slide 40), const (slide 51)
const Students = [
    { id: 1000, nom: "JOHN",   prenom: "DOE",     note: 14, coef: 5 },
    { id: 2000, nom: "BOB",    prenom: "CARLTON", note: 7,  coef: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH",   note: 13, coef: 3 }
];

// Fonction A : appelée au clic, elle appelle la fonction B (slide 45)
function A() {
    // Boucle for..of pour parcourir les étudiants (slide 44)
    for (const s of Students) {
        // Appel de la fonction B avec un seul paramètre (slide 45)
        // Condition if..else sur le booléen retourné (slide 42)
        if (B(s.note)) {
            // Concaténation avec + (slide 41), affichage avec console.log (slide 33)
            console.log(s.id + ": ADMIS");
        } else {
            console.log(s.id + ": AJOURNÉ");
        }
    }
}

// Fonction B : prend un seul paramètre float (type number, slide 37) et retourne un booléen
function B(note) {
    // Opérateur de comparaison (slide 41) : retourne true si note >= 10
    return note >= 10;
}