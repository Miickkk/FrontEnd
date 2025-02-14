// Exercício 6.1

const prompt = require('prompt-sync') ({sigint : true});

function jogoAd() {
    let numeroAle = Math.floor(Math.random() * 10) + 1;
    let numeroUsu = parseInt(prompt("Digite um número entre 1 e 10:"));

    if (numeroUsu === numeroAle) {
        console.log("Parabéns! você acertou o número!");
    } else {
        console.log(`Você errou! O número correto era ${numeroAle}.`);
    }
}
jogoAd();