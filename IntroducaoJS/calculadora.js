// criar uma calculadora simples em javaScript
var prompt = require("prompt-sync")();
var numero1, numero2, resultado;
var operacao;
var continuar = true;


// funções de operação
function soma(a, b) {
    return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

while (continuar) {
    console.log("Calculadora Simples");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");
    operacao = Number(prompt("Informe a Operação Desejada: "));

    //pedir os números
    numero1 = Number(prompt("Informe o 1º nº:"));
    numero2 = Number(prompt("Informe o 2º nº:"));


    //condição de escolha
    switch (operacao) {
      case 1:
        resultado = soma(numero1, numero2);
        console.log("O resultado é" + resultado);
        break;

      case 2:
        resultado = sub(numero1, numero2);
        console.log("O resultado é" + resultado);
        break;

      case 3:
        resultado = mult(numero1, numero2);
        console.log("O resultado é" + resultado);
        break;

      case 4:
        resultado = div(numero1, numero2);
        console.log("O resultado é " + resultado);
        break;

      default:
        break;
    }
}