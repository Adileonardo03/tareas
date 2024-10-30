/// Inicio de un arreglo para el carrito de compras
let carrito = [];

// Precios de las prendas
const prendas = [
    { nombre: "Camisa", precio: 400 },
    { nombre: "Pantalón", precio: 500 },
    { nombre: "Chamarra", precio: 600 },
    { nombre: "Tenis", precio: 800 }
];

// Función para mostrar nuestro menú
function mostrarMenu() {
    let opciones = prendas.map((prenda, index) => `${index + 1}.- ${prenda.nombre} - $${prenda.precio}`).join('\n');
    return parseInt(prompt(`
        "Opciones disponibles"
        ${opciones}
        ${prendas.length + 1}.- Ver carrito y total a pagar
        ${prendas.length + 2}.- Salir
        "Elige una opción:"
    `));
}

// Función para agregar una prenda al carrito
function agregarPrenda() {
    let numero = parseInt(prompt("Ingresa el número de la prenda que deseas agregar:"));
    if (numero > 0 && numero <= prendas.length) {
        carrito.push(prendas[numero - 1]);
        console.log(`Prenda agregada al carrito: ${prendas[numero - 1].nombre} - $${prendas[numero - 1].precio}`);
    } else {
        alert("Número no válido.");
    }
}

// Función para ver el carrito y total a pagar
function verCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
    } else {
        let mensaje = "Carrito de compras:\n";
        let total = 0;
        carrito.forEach((prenda, index) => {
            mensaje += `${index + 1}.- ${prenda.nombre} - $${prenda.precio}\n`;
            total += prenda.precio;
        });
        mensaje += `Total a pagar: $${total}\n`;
        alert(mensaje);
        console.log(`Total a pagar: $${total}`);
    }
}

// Función para manejar el flujo del programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
            case 2:
            case 3:
            case 4:
                agregarPrenda();
                break;
            case prendas.length + 1:
                verCarrito();
                break;
            case prendas.length + 2:
                alert("Saliendo del programa ...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta nuevamente.");
        }
    }
    alert("Programa Finalizado");
}

iniciarPrograma();
