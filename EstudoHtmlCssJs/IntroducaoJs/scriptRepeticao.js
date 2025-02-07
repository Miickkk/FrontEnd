/*For*/
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}

/*While*/
let continuar = true;
let contador = 0;
while (continuar) {
    console.log(contador);
    contador++;
    if (contador >5) {
        continuar = false
    }
    console.log(continuar)
}