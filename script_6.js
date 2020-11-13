// programme en javascript projet initial //

console.log("2.4.1 Code la vie");

/* identifie les acides aminés à partir des différents codons */
const serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
const proline = ["CCU", "CCC", "CCA", "CCG"];
const leucine = ["UUA", "UUG"];
const phenylalanine = ["UUU", "UUC"];
const arginine = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
const tyrosine = ["UAU", "UAC"];

let acide = "";

/* fonction permettant de traduire un codon donné dans l'acide aminé correspondant */
function translate(inputCodon) {
    if (serine.includes(inputCodon)) {
        acide = "Serine";
    } else if (proline.includes(inputCodon)) {
        acide = "Proline";
    } else if (leucine.includes(inputCodon)) {
        acide = "Leucine";
    } else if (phenylalanine.includes(inputCodon)) {
        acide = "Phénylalanine";
    } else if (arginine.includes(inputCodon)) {
        acide = "Arginine";
    } else if (tyrosine.includes(inputCodon)) {
        acide = "Tyrosine"
    }
    return acide;
};

const givenArn1 = "CCGUCGUUGCGCUACAGC";
const givenArn2 = "CCUCGCCGGUACUUCUCG";

/* fonction permettant de scinder l'ARN de départ en codons, puis de convertir chaque codon en acide aminé */
function convert(inputArn) {
    let resultCodeArray = [];
    let resultCode = "";
    let i = 0;
    for (let count = 0; count <= 5; count++) {
        console.log(count);
        i = count * 3;
        let codon = inputArn.substr(i, 3); /* extrait le codon recherché */
        console.log(codon);
        console.log(translate(codon)); /* traduit le codon en acide aminé correspondant */
        resultCodeArray.push(translate(codon)); /* construit un array avec les acides aminés */
        console.log(resultCodeArray);
    }
    resultCode = resultCodeArray.join("-"); /* construit le string résultat à partir de l'array contenant les acides aminés */
    console.log(resultCode);
}
convert(givenArn1);
convert(givenArn2);