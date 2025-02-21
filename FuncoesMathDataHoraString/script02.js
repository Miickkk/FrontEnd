let texto = "Aula de JavaScript";

//contagem dos caracteres (length)
console.log(texto.length); //18

// maiusculas e minusculas
console.log(texto.toUpperCase()); //maiuscula
console.log(texto.toLowerCase()); // minuscula

//partes da string
console.log(texto.substring(0,4));
console.log(texto.slice(-10));

//substituição de texto
let novoTexto = texto.replace("Java", "Type");
console.log(novoTexto);

//trim (tesoura)
let textoEspaco = " JavaScript ";
let textoCortado = textoEspaco.trim();
console.log(textoEspaco);
console.log(textoCortado);

//split (separação)
let linguagens = "JavaScript,Python,Java,C++";
let arrayLinguagens = linguagens.split(",");
console.log(arrayLinguagens); // ["JavaScript", "Python", "Java", "C++"]
