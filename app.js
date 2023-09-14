let btnPromedio = document.getElementById('btnPromedio');
btnPromedio.addEventListener('click', function(){
    let miArreglo = [];

    let numero1 = document.getElementById('txtNumero1'),
    numero2 = document.getElementById('txtNumero2'),
    numero3 = document.getElementById('txtNumero3'),
    numero4 = document.getElementById('txtNumero4'),
    numero5 = document.getElementById('txtNumero5');

    miArreglo.push(numero1.value);
    miArreglo.push(numero2.value);
    miArreglo.push(numero3.value);
    miArreglo.push(numero4.value);
    miArreglo.push(numero5.value);

    let cantidadElementos = miArreglo.length;
    let acumulador = 0;
    miArreglo.forEach(function(valor){
        acumulador += parseInt(valor);
    })

    let alerta = document.getElementById('alerta');
    alerta.innerHTML = `El valor es: ${acumulador/cantidadElementos}`;
});