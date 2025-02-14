// Exercício 4.2

const prompt = require('prompt-sync') ({sigint : true});
 let num = prompt("Digite o número que você quer a tabuada: ");
 
 for (let x = 1; x<= 100; x++ ){
    console.log(num, "X", x ,"=" ,num * x);
}