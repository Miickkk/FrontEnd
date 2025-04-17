// Classe ContaBancaria
class ContaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }


  // Metodos (depositar, sacar, exibirSaldo)
  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito feito de: R$${valor}`);
    } else {
      console.log("Valor baixo para depósito!");
    }
  }

  sacar(valor) {
    if (valor <= 0) {
      console.log("Valor baixo para saque!");
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.saldo -= valor;
      console.log(`Saque feito de: R$${valor}`);
    }
  }

  exibirSaldo() {
    console.log(
      `
      Nome do Titular: ${this.titular}
      Saldo Atual: R$${this.saldo}
      `
    );
  }
}


// Exibir na tela
let contaBanc = new ContaBancaria("Nick");

contaBanc.exibirSaldo(); 
contaBanc.depositar(5000); 
contaBanc.exibirSaldo();
contaBanc.sacar(100); 
contaBanc.exibirSaldo(); 
