// Classe Aluno
class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
  }


  // Metodos (addNota, calcMedia, situacao)
 addNota(nota) {
    if (nota >= 0 && nota <= 10) {
      this.notas.push(nota);
      console.log(
        `
        Aluno(a): ${this.nome}  :D
        Nota: ${nota}  :D
        `
    );
    } else {
      console.log("Digite uma nota válida!");
    }
  }

 calcMedia() {
    if (this.notas.length === 0) {
      console.log("Nenhuma nota cadastrada!");
      return 0;
    }
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    const media = soma / this.notas.length;
    console.log(`Média: ${media.toFixed(2)}`);
    }

 situacao() {
    const media = this.calcMedia();

    if (media >= 7) {
      console.log(`${this.nome} está Aprovado(a)!`);
    } else {
      console.log(`${this.nome} está Reprovado(a)!`);
    }
  }
}


// Exibir na tela
let aluno1 = new Aluno("Nick");
let aluno2 = new Aluno("Malu");

aluno1.addNota(10);
aluno1.addNota(9);
aluno1.addNota(8);

aluno1.situacao();
       
aluno2.addNota(10);
aluno2.addNota(8.5);
aluno2.addNota(9.5);

aluno2.situacao();       