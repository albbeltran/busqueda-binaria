let numeros = [1, 2, 3, 10, 25];
let izq, der, mitad, dato;
let flag = false;

dato = 10000;

izq = 0;
der = numeros.length;

while (izq <= der) {
    mitad = (izq + der) / 2;
    mitad = Math.round(mitad);

    if (numeros[mitad] == dato) {
        flag = true;
        break;
    } else if (numeros[mitad] < dato) izq = mitad + 1;
    else der = mitad - 1;
}

if (flag) console.log("El número fue encontrado en la posición: ", mitad);
else console.log("El número no fue encontrado.")