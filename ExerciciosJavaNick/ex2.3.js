// Exercício 2.3

const prompt = require("prompt-sync")({ sigint: true });

let nu1 = Number(prompt("Digite o primeiro número:"));
let nu2 = Number(prompt("Digite o segundo número:"));


let soma = nu1 + nu2;
let sub = nu1 - nu2;
let mult = nu1 * nu2;
let div = nu1 / nu2;


console.log("Soma: " + soma);
console.log("Subtração: " + sub);
console.log("Multiplicação: " + mult);
console.log("Divisão: " + div);
