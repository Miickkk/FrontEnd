// Classe Produto
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  
  // Metodos (vender, repor e exibirInfo)
  vender(quantidade) {
    if (quantidade > this.estoque) {
      console.log(
        `Estoque Insuficiente! Quantidade em Estoque é = ${this.estoque}`
      );
      return;
    }
    this.estoque -= quantidade; //this.estoque = this.estoque - quantidade
    console.log(
      `${quantidade} ${
        quantidade === 1 ? "Unidade" : "Unidades"
      } vendida(s). Estoque restane: ${this.estoque}`
    );
  }

  repor(quantidade) {
    this.estoque += quantidade;
    console.log(`Estoque atual: ${this.estoque}`);
  }

  exibirInfo() {
    console.log(
      `Produto: ${this.nome}. Preço R$${this.preco}. Estoque: ${this.estoque}`
    );
  }
}


// Exibir na tela
let produto = new Produto("Shampoo", 30.05, 1000);
let produto1 = new Produto();

produto.exibirInfo();
produto.vender();
