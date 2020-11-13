// programme en javascript projet initial //

console.log("2.3.2 Bibliothécaire");

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(`Est-ce que tous les livres ont été au moins empruntés une fois ?`)
let notRented = false;
for (let index in books) {
    if (books[index].rented === 0) {
        notRented = true;
    }
};
if (notRented === false) {
    console.log(`Oui`);
} else {
    console.log(`Non`);
}

console.log(`Quel est livre le plus emprunté ?`)
let maxRented = 0;
let indexMax = 0;
for (let index in books) {
    if (books[index].rented > maxRented) {
        maxRented = books[index].rented;
        indexMax = index;
    }
}
console.log(books[indexMax].title);

console.log(`Quel est livre le moins emprunté ?`)
let minRented = books[0].rented;
let indexMin = 0;
for (let index in books) {
    if (books[index].rented < minRented) {
        minRented = books[index].rented;
        indexMin = index;
    }
}
console.log(books[indexMin].title);

console.log(`Trouve le livre avec l'ID: 873495 :`);
let searchedId = 873495;
let found = false;
let indexFound = 0;
for (let index in books) {
    if (books[index].id === searchedId) {
        found = true;
        indexFound = index;
    }
}
if (found) {
    console.log(`Le livre cherché existe, il s'agit de : ${books[indexFound].title}`);
} else {
    console.log(`Désolé, mais nous n'avons pas trouvé de livre avec cet id`);
}

console.log(`Supprime le livre avec l'ID: 133712 ;`);
let searchedId2 = 133712;
let resultArray = [];
for (let index in books) {
    if (books[index].id !== searchedId2) {
        resultArray.push(books[index]);
    }
}
console.log(resultArray);

console.log(`Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).`)
resultArray.sort(function compare(a, b) {
    if (a.title < b.title)
        return -1;
    if (a.title > b.title)
        return 1;
    return 0;
});
console.log(resultArray);