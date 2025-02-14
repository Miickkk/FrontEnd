// Desafio 1

const prompt = require("prompt-sync")({ sigint: true });

let idade = prompt("Digite sua idade: ");

if (idade < 18) {
    console.log("Você é menor de idade!")

}  else if (idade >= 18) {
    console.log("Você é um adulto!")
    
} else {
    console.log("Coloque uma idade válida!")
}