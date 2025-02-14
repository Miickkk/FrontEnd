// Exercício 3.1

const prompt = require('prompt-sync') ({ sigint: true });
let numero = prompt('Digite um número: ');

if (numero % 2 == 0) {
    console.log("O número " + numero + " é par!");
} else {
    console.log("O número " + numero + " é impar!");
}