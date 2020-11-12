// programme en javascript projet initial //

console.log("2.2.2 Pyramide de Mario");

console.log(`"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"`);
let totalFloor = Number(prompt(`Rentre ici le numbre d'étages de ta pyramide :`));

function buildFloor(totalFloor, currentFloor) {
    console.log(` `.repeat(totalFloor - currentFloor) + `#`.repeat(currentFloor));
}

for (let currentFloor = 1; currentFloor <= totalFloor; currentFloor++) {
    buildFloor(totalFloor, currentFloor);
}