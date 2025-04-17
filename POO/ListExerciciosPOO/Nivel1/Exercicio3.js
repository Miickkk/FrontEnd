// Classe: Calculadora
class Calculadora {


  // Métodos (somar, subtrair, multiplicar e dividir)
  static somar(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static mult(a, b) {
    return a * b;
  }

  static div(a, b) {
    if (b === 0) {
      return "Erro: divisão por zero!";
    }
    return a / b;
  }
}


// Exibir na tela
console.log(Calculadora.somar(10, 5)); 
console.log(Calculadora.sub(10, 5)); 
console.log(Calculadora.mult(10, 5)); 
console.log(Calculadora.div(10, 2)); 
