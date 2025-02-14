// Exercício 3.2

const prompt = require('prompt-sync') ({ sigint: true });
let idade = prompt("Digite a sua idade: ");

if (idade < 16) {
    console.log("Você não pode votar.");
} else if (idade >= 16 && idade < 18) {
    console.log("Seu voto é opcional.");
} else {
   console.log("O voto é obrigatório, e você pode tirar CNH.");
}