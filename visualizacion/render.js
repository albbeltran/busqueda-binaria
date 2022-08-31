let longitud = document.getElementById('longitud');
let datoInput = document.getElementById('dato');
let numeros = [];

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    if (document.getElementsByClassName('container') != null) {
        let containers = document.getElementsByClassName('container');
        containers = Array.from(containers)
        containers.forEach(container => container.remove())
    }
    numeros = [];

    if (longitud.value == '' || datoInput.value == '') {
        alert('Ingrese datos válidos');
    } else {
        algoritmo();
    };
});

const algoritmo = () => {
    let contador = 0;
    for (let index = 0; index < longitud.value; index++) {
        contador++;
        numeros.push(contador);
    }
    let numerosAux = numeros;

    render('INICIO', numerosAux);

    let izq, der, mitad, dato, flag = false;
    dato = datoInput.value;

    izq = 0;
    der = numeros.length;

    while (izq <= der) {
        mitad = (izq + der) / 2;
        mitad = Math.round(mitad)

        if (numeros[mitad] == dato) {
            flag = true;

            numerosAux = numerosAux.filter(numero => {
                if (numero == numeros[mitad]) {
                    return numero;
                };
            });

            render('MITAD', numerosAux);
            break;
        }

        else if (numeros[mitad] < dato) {
            izq = mitad + 1;

            numerosAux = numerosAux.filter(numero => {
                if (numero >= (izq + 1)) {
                    return numero;
                }
            });

            render('DERECHA', numerosAux);
        }

        else {
            der = mitad - 1;

            numerosAux = numerosAux.filter(numero => {
                if (numero <= (der + 1)) {
                    return numero;
                }
            });

            render('IZQUIERDA', numerosAux);
        }
    };

    if (flag == false) {
        document.getElementById('alert').setAttribute('class', 'alert show');
    }

    document.getElementById('btnClose').addEventListener('click', () => {
        document.getElementById('alert').removeAttribute('class');
        document.getElementById('alert').setAttribute('class', 'alert hide');
    })
};

const render = (text, numerosAux) => {
    container = document.createElement('div');
    container.setAttribute('class', 'container');
    container.setAttribute('id', 'container');
    document.getElementById('body').appendChild(container);
    containerTitle = document.createElement('div');
    containerTitle.setAttribute('class', 'title-container');
    text = document.createTextNode(`${text}`);
    container.appendChild(containerTitle)
    containerTitle.appendChild(text);

    containerBox = document.createElement('div');
    containerBox.setAttribute('class', 'container-box');
    container.appendChild(containerBox)

    numerosAux.forEach(element => {
        elementBox = document.createElement('div');
        elementBox.setAttribute('class', 'elementBox')
        elementTxt = document.createTextNode(`${element}`);
        elementBox.appendChild(elementTxt);
        containerBox.appendChild(elementBox);
    });
};