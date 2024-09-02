
let numeromaquina;
let vidas = 3;
let numerousuario;

function Juegorandom() {
    numeromaquina = Math.floor(Math.random() * (10 - 1) + 1); // Corrige el rango del número aleatorio
    console.log(`El número es: ` +numeromaquina );
    vidas = 3;
    console.log(`Tienes ${vidas} intentos. ¡Buena suerte!`);
    numerousuario = parseInt(prompt("Dame un número del 1-10"));

    while (numeromaquina !== numerousuario && vidas > 1) {
        vidas--;
        numerousuario = parseInt(prompt("Inténtalo otra vez"));
    }

    if (numeromaquina === numerousuario) {
        alert("¡GANASTE, MUY BIEN HECHO!");
        console.log("GANASTE");
    } else {
        alert("¡PERDISTE! El número era " + numeromaquina);
        console.log("PERDISTE");
    }
}


Juegorandom();
