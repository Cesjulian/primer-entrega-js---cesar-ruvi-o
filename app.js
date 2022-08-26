//FOR 


let saludos = Number(prompt("cuantos hola quiere repetir?"));

if (!isNaN(saludos)) {
    alert (`se van a mostrar ${saludos} "hola!"`);
} else {
    alert ("por favor ingrese un valor numerico");
}

for (let i = 1; i <= saludos ; i++) {
    alert ("hola!!!");
}


//WHILE

let conteo = Number(prompt("hasta que numero desea contar?"));
let numeroBase = 0;

while (numeroBase <= conteo) {
    alert(`${numeroBase}`);
    numeroBase++;
}
