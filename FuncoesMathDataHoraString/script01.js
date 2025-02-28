// Funçoes de Data e Hora
let agora = new Date(); // instanciando um objeto da classe Date
console.log(agora);
console.log(agora.toLocaleDateString);

// Funçoes GET (Pegar informações)
console.log(agora.getFullYear());

// Funçoes SET (Alterar Informações)
agora.setFullYear(2030);

//Funções TO (Imprimir) - Formato de Texto
console.log(agora.toLocaleDateString());

// Manipulação de Datas
let data1 = new Date();
let data2 = new Date("2025-12-31");

let diferenca = data2-data1; //miliseegundos