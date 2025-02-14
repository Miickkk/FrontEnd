// Exercício 5.2

function calculadora(n1, n2, operacao) {
    switch (operacao) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero!"
        default:
            return "Operação inválida!"
    }
}

console.log(calculadora(10, 5, "+"));
console.log(calculadora(9, 3, "-"));
console.log(calculadora(11, 8, "*"));
console.log(calculadora(4, 2, "/"));