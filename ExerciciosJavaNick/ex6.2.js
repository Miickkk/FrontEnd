// Exercício 6.2

const prompt = require('prompt-sync') ({sigint : true});
function calIMC() {
    let peso = parseFloat(prompt("Digite seu peso (kg):"));
    let altura = parseFloat(prompt("Digite sua altura (m):"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log("Insira valores válidos.");
        return;
    }

    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Categoria: Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Categoria: Peso normal"); 
    }  else if (imc >= 25 && imc <= 29.9) {
        console.log("Categoria: Sobrepeso");
    } else {
        console.log("Categoria: Obesidade");
      }
    }
calIMC();