// exercicio 4

const prompt = require("prompt-sync")({ sigint: true });

const numdeci = Number(prompt("Digite um número decimal: "));

console.log(Math.ceil("Número arredondado para cima: " + numdeci));
console.log(Math.floor("Número arredondado para baixo: " + numdeci));
console.log(Math.round("Número arredondado para o inteiro mais próximo: " + numdeci));