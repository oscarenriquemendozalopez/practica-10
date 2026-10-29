const readline = require('readline');

const sarv = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

sarv.question("Ingrese un número positivo: ", (inp)=>{
    const numero = Number(inp);

    if (!Number.isInteger(numero) || numero <= 0) {
        console.log("Error: debes ingresar un número entero positivo mayor que 0");
        sarv.close();
        return;
    }
    
    const resultado = sumarhata(numero);
    console.log(`La suma desde 1 hasta ${numero} es: ${resultado}`);
    sarv.close();
});

function sumarhata(numero) {
    if (numero === 1) {
        return 1;
    }

    return numero + sumarhata(numero - 1);
}