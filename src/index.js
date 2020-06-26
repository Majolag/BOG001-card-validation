'use strict'

import validator from './validator.js';

let boton = document.getElementById('boton'),
    numero = document.getElementById('numero'),
    bienvenido = document.getElementById('bienvenido'),
    mensaje = document.getElementById('mensaje'),
    tarjeta = document.getElementById('card'),
    ingresar = document.getElementById('ingresar');


boton.addEventListener('click', () => {
    numero.style.display = 'block';
    bienvenido.style.display = 'none';
});

ingresar.addEventListener('click', () => {

    let valor = validator.isValid(tarjeta.value);
    let mascara = validator.maskify(tarjeta.value);


    if (valor) {
        swal.fire({
            text: 'Su número ' + (mascara) + ' es valido',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#FF7600',
            width: '30%',
        });
    
            numero.style.display = 'none';
            mensaje.style.display = 'block';

    } else {
        swal.fire({
            text: 'El número que ingreso no es valido',
            icon: 'error',
            confirmButtonText: 'Intente de nuevo',
            confirmButtonColor: '#FF7600',
            width: '30%',
        });
    }
    
    
});