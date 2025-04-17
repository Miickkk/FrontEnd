// Classe Produto
class Produto {
  constructor(nome, preco, quant) {
    this.nome = nome;
    this.preco = preco;
    this.quant = quant;
  }

  
  // Metodos (vender, repor, exibirInfo)
  vender(qtd) {
    if (qtd <= 0) {
      console.log("Quantidade baixa para venda!");
    } else if (qtd > this.quant) {
      console.log("Estoque insuficiente para realizar a venda!");
    } else {
      this.quant -= qtd;
      console.log(
        `
        Venda: ${qtd}  :B
        Unidade(s): ${this.quant}  :B
        Venda realizada com sucesso!  :B
        `
      );
    }
  }

  repor(qtd) {
    if (qtd <= 0) {
      console.log("Quantidade baixa para reposição!");
    } else {
      this.quantidade += qtd;
      console.log(
        `
        Reposição: ${qtd}  :B
        Unidade(s) em estoque agora: ${this.quant}  :B
        Reposição realizada com sucesso!  :B
        `
      );
    }
  }

  exibirInfo() {
    console.log(
      `
      Produto: ${this.nome}  :B
      Preço: R$${this.preco.toFixed(2)}  :B
      Quantidade em estoque: ${this.quant}  :B
      `
    );
  }
}


// Exibir na tela
const produto1 = new Produto("scarpin régine em crepe de cetim", 7460.0, 500);

produto1.exibirInfo();
produto1.vender(20);
produto1.exibirInfo();
produto1.repor(30);
produto1.exibirInfo();
