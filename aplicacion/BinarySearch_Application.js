const prompt = require('prompt-sync')();
const fs = require('fs');

var IDArray = [];
const json = fs.readFileSync('Empleados_BSD.json');
const BD = JSON.parse(json);
const NumEmp = Object.keys(BD.Empleados).length;
for (let i = 0; i < NumEmp; i++) {
    IDArray[i] = i + 1
}

const IDEM = prompt('Escribe el ID del empleado: ')
let izq = 0, der = IDArray.length, mitad;
let flag = false;

while (izq <= der) {
    mitad = (izq + der) / 2;
    mitad = Math.round(mitad)

    if (IDArray[mitad] == IDEM) {
        flag = true;
        break;
    } else if (IDArray[mitad] < IDEM) izq = mitad + 1;
    else der = mitad - 1;
}
if (flag) console.log("El empleado fue encontrado\n", Object.entries(BD.Empleados[mitad]));
else console.log("El empleado no existe.")