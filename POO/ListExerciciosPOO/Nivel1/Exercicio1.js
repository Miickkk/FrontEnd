// Classe Pessoa
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome; 
    this.idade = idade;
  }


  // Metodos (apresentar)
  apresentar() {
    console.log(
      `
      Seu nome é: ${this.nome}  ^-^
      Sua idade é: ${this.idade}  ^-^
      `
    );
  }
}


// Exibir na tela
let nomeid = new Pessoa("Nick", "17");
let nomeid2 = new Pessoa("Malu", "18");

nomeid.apresentar();
nomeid2.apresentar();


