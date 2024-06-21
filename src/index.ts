// 1. Años
const years: number[] = [];

for (let i = 2000; i <= 2024; i++) {
  years.push(i);
}

// 2. Words

const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura",
  "su",
  "por",
  "llaman,",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];

console.log(words.reverse().join(" "));

//3. Notas
let examScores: number[] = [];

examScores = [7, 8, 4, 5, 4];

let sortedScores = examScores.sort();

for (let score of sortedScores) {
  if (score >= 5) {
    console.log(`Examen aprobado con un: ${score}`);
  }
}

let totalScore = 0;

for (let score of sortedScores) {
  totalScore += score;
}

console.log(`La nota media es de: ${totalScore / sortedScores.length}`);

const min = sortedScores[0];
const max = sortedScores[sortedScores.length - 1];

console.log(`La nota más alta es: ${max}; la más baja: ${min}`);
