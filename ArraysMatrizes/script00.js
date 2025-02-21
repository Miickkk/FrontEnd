//arrays e matrizes

//array
let numeros = [1,2,3,4,5,6,7,8,9]; //elementos=9, tamanho=9, idice do primeiro elemento=0
console.log(numeros[8]);

let texto = ["cachorro", "bola", "sapato", "prédio"]; //texto
let mista = ["gato", 2, true];
console.log(texto[1]);
console.log(texto[2]);


//tamanho do array (length)
console.log(texto.length); //4


//adicionar elementos em um array ou alterar
//adicionar
//começo (unshit)
texto.unshift("pão");
console.log(texto);
//fim (push)
texto.push("jogo");
console.log(texto);
//remover do começo (shift)
texto.shift();
console.log(texto);
//remover do final (pop)
texto.pop();
console.log(texto);

//alteração de valor
texto[2] = "Tênis";
console.log(texto);


//percorrer um array (for // foreach)
//for
for(let i = 0; i<numeros.length; i++){
    console.log("numeros ["+i+"]="+numeros[i]);
}

//foreach
texto.forEach(t => {
    console.log(t)
});

let lista = [];
for (let i = 1; i <101; i++) {
  console.log("numeros [" + i + "]" + lista);
}


//retorna o indice
texto.indexOf("Tênis");

//splice (remover elemento de posição especifica)
texto.splice(2,1); //posição, quantidade
console.log(texto);

//operações avançadas de arrays
let valores = [10, 20, 30, 40, 50];

//map
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter
let parteValores = valores.filter(x => x > 20);
console.log(parteValores);

//filtro e map x<35 x*2
let valor = valores.filter(x => x < 35).map(x => x*2);
console.log(valor);

//reduce
let soma = valores.reduce((x, valorAtual) => (x + valorAtual),0);

//sort
let z = [2,3,6,8,1,7,4,9,5];
z.sort();
console.log(z);
