
let saludos = Number(prompt("cuantos hola quiere repetir?"));

if (!isNaN(saludos)) {
    alert (`se van a mostrar ${saludos} "hola!"`);
} else {
    alert ("por favor ingrese un valor numerico");
}

for (let i = 1; i <= saludos ; i++) {
    alert ("hola!!!");
}