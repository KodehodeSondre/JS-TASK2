//#1. ------------------------------
console.log("#1---------------------")

let tallSum = 0;

for (let i = 1; i <= 100; i++) {
    tallSum += i;
}

console.log("Summen av tallene fra 1 til 100 er:", tallSum);

//#2. ------------------------------ 
console.log("#2---------------------")
const num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

//#3. ------------------------------ 
console.log("#3---------------------")
const tekst = "Sigma style, tekst som brukes for oppgaven";
let antallBokstaver = 0;

for (let i = 0; i < tekst.length; i++) {
    antallBokstaver++;
}

console.log("Antall bokstaver:", antallBokstaver);


//#4. ------------------------------ 
console.log("#4---------------------")
const tallListe = [71, 22, 63, 25, 84, 10, 62, 41, 9];
let storsteTall = tallListe[0];  

for (let i = 1; i < tallListe.length; i++) {
    if (tallListe[i] > storsteTall) {
        storsteTall = tallListe[i];
    }
}

console.log("Det største tallet er:", storsteTall);

//#5. ------------------------------ 
console.log("#5---------------------")
function reversertString(str) {
    let reversert = ""; 
    for (let i = str.length - 1; i >= 0; i--) { 
        reversert += str[i]; 
    }
    return reversert;
}

const originalString = "Hørte du at Skibidi toilet får en film?";
const reversertStringFerdig = reversertString(originalString);
console.log(reversertStringFerdig); 

//#6. ------------------------------ 
console.log("#6---------------------")
for (let i = 1; i <= 20; i++) {
    if (i === 10) {
        continue; 
    }
    console.log(i); 
}
//#7. ------------------------------ 
console.log("#7---------------------")
let sum = 0; 

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) { 
        sum += i;
    }
}

console.log("Summen er:", sum); 


//#8. ------------------------------ 
console.log("#8---------------------")
let monster = ""; 

for (let i = 1; i <= 4; i++) { 
    monster += "*".repeat(i) + "\n"; 
}

console.log(monster); 


//#9. ------------------------------ 
console.log("#9---------------------")
function genererDiamant(maxWidth) {
    let monster = "";

    for (let i = 1; i <= maxWidth; i += 2) {
        monster += " ".repeat((maxWidth - i) / 2);
        monster += "*".repeat(i);
        monster += "\n";
    }

   
    for (let i = maxWidth - 2; i >= 1; i -= 2) {
        monster += " ".repeat((maxWidth - i) / 2);
        monster += "*".repeat(i);
        monster += "\n";
    }

    console.log(monster); 
}

genererDiamant(7);

//#10. ------------------------------ 
console.log("#10---------------------")

function findOrdSomGårIgjen(text) {
    const wordCounts = {}; 
    const words = text.toLowerCase().split(/\W+/); 

    for (let word of words) {
        if (word) { 
            wordCounts[word] = (wordCounts[word] || 0) + 1; 
        }
    }

    const repeatingWords = [];
    for (let word in wordCounts) {
        if (wordCounts[word] > 1) {
            repeatingWords.push(word); 
        }
    }

    return repeatingWords;
}


const text = "En typisk sigma er en person som nekter å følgte reglene etablert av samfunnet/alphaen og bestemmer selv. Personer som er sigma har ofte sterke meninger om mangt og meget, men holder de for seg selv inntil de bestemmer for å dele de.";
const result = findOrdSomGårIgjen(text);
console.log("Ord som går igjen:", result); 
