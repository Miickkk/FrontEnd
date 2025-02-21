// Funçoes Matemáticas (Math)

// Math.sqrt // Math.pow
// Raiz Quadrada de 25
console.log(Math.sqrt(25)); //5

// Potência de um número
console.log(Math.pow(3, 2)); //3² = 9
console.log(Math.pow(4,3)); //4³ = 64
console.log(Math.pow(27, 1 / 3)) //27^(1/3) = 3 - Raiz Cúbica

// Arredondamento usando Math(round, floor, ceil)
// round - número mais proximo
console.log(Math.round(4.3)); //4
console.log(Math.round(4.7)); //5
//  floor - sempre para baixo
console.log(Math.floor(4.9)); //4
// ceil - sempre para cima
console.log(Math.ceil(4.1)); //5

// Math.ramdom - números aleatórios
console.log(Math.random()); //0->1
//0 - >100
console.log(Math.round(Math.random()*100));

// Valor absoluto, minimo e maximo
console.log(Math.abs(-10)); // Retorna 10 (valor absoluto)
console.log(Math.min(5, 2, 9, 3)); // Retorna 2 (o menor valor da lista)
console.log(Math.max(5, 2, 9, 3)); // Retorna 9 (o maior valor da lista)
