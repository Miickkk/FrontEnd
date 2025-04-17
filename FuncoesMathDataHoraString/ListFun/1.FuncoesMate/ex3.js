// exercicio 3

const prompt = require("prompt-sync")({ sigint: true });

let maior = Number(prompt("Digite um número: "));
let maior1 = Number(prompt("Digite outro número: "));

console.log("Número Maior: " + Math.max(maior, maior1));