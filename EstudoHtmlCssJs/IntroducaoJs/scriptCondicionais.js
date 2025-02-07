/*  Exemplo Estrutura Condicional*/
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

/* Exemplo If não encadeado*/
let nota = 6.5;

if (nota >= 7) {
  console.log("Aluno Aprovado");
} else if (nota >= 5) {
  console.log("Aluno de Recuperação");
} else {
  console.log("Aluno Reprovado");
}

/* Exemplo Estrutura de Repetição*/
let dia = 3 
switch (dia) {
  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Segunda");
    break;

  default:
    console.log("Outro dia...");
    break;
}