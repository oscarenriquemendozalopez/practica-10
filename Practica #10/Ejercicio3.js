const readline = require('readline');

const crr = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let contadorproductos = 0;
let cantidadproductos = 0;
let acumuladorprecio = 0;

crr.question("¿Cuántos productos vas a registrar? ", (pvr)=>{
  cantidadproductos = Number(pvr);

  if (!Number.isInteger(cantidadproductos) || cantidadproductos <= 0) {
    console.log("Error: ingresa una cantidad entera mayor que 0");
    crr.close();
    return;
  }

  pedirprecio();
});

function pedirprecio() {
  if (contadorproductos === cantidadproductos) {
    mostrarresumen();
    crr.close();
    return
  }

  crr.question(`Ingresa el precio del producto ${contadorproductos + 1}: $`, (pp)=>{
    const precio = Number(pp);

    if (Number.isNaN(precio) || precio < 0) {
      console.log("Error: ingresa un precio válido mayor o igual a 0");
      pedirprecio();
      return;
    }

    acumuladorprecio += precio;
    contadorproductos++;

    pedirprecio();
  });
}

function mostrarresumen() {
  const iva = acumuladorprecio * 0.13;
  const total = acumuladorprecio + iva;

  console.log("\n=== Resumen de la compra ===");
  console.log(`Subtotal: $${acumuladorprecio.toFixed(2)}`);
  console.log(`Iva (13%): $${iva.toFixed(2)}`);
  console.log(`Total a pagar: $${total.toFixed(2)}`)
}