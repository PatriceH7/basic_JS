// programme en javascript projet initial //

console.log("2.2.1 Calculs rapides");

let factorial = 1;
let input = Number(prompt(`De quel nombre veux-tu calculer la factorielle ?`));
console.log(input); /* affiche en console l'entrée saisie par l'utilisateur */

for (var count = 1; count <= input; count++) {
    factorial = factorial * count
};
console.log(`"Le résultat est : ${factorial}"`);