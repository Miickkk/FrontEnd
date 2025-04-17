// Classe Veiculo
class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  
  // Metodos (exibirInfo)
  exibirInfo() {
    console.log(
      `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
    );
  }
}


// Subclasse Carro
class Carro extends Veiculo {
  constructor(marca, modelo, ano, quantPortas) {
    super(marca, modelo, ano);
    this.quantPortas = quantPortas;
  }


  // Metodos (exibirInfo)
  exibirInfo() {
    console.log(
      `
      Marca: ${this.marca}, 
      Modelo: ${this.modelo}, 
      Ano: ${this.ano}, 
      Portas: ${this.quantPortas}
      `
    );
  }
}


// Exibir na tela
let carro1 = new Carro("FIAT", "Uno", 1994, 4);
let carro2 = new Carro("GM", "Corsa", 2011, 3);

carro1.exibirInfo();
carro2.exibirInfo();
