const readline = require('readline');

const crpv = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

crpv.question("Ingrese un número entero positivo: ", (nep) => {
  const numero = Number(nep);

  if (!Number.isInteger(numero) || numero <= 0) {
    console.log("Error: debes ingresar un número entero positivo mayor que 0");
    crpv.close();
    return;
  }

  cuentaregresiva(numero);
  crpv.close();
});

function cuentaregresiva(numero) {
  console.log(numero);

  if (numero === 1) {
    console.log("¡El tiempo se ha acabado!");
    return;
  }

  cuentaregresiva(numero - 1);
}