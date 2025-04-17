// Classe Livro
class Pessoa {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }


  // Metodos (apresentar)
  exibirInfo() {
    console.log(
      `
      Título do livro: ${this.titulo}  :P
      Nome do autor: ${this.autor}  :P
      Nº de páginas: ${this.paginas}  :P
      `
    );
  }
}


// Exibir na tela
let livro = new Pessoa("A Rainha Vermelha", "Victoria Aveyard", 424);
let livro2 = new Pessoa("As Aventuras de Sherlock Holmes", "Árthur Conan Doyle", 208);

livro.exibirInfo();
livro2.exibirInfo();
