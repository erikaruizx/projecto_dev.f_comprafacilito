// getElementById busca el id en nuestro archivo HTML
let titulo = document.getElementById('titulo')
let texto = document.getElementById('texto')
let pregunta = document.getElementById('pregunta')
let respuesta = document.getElementById('respuesta')

let teléfono = document.getElementById('teléfono')
let dirección = document.getElementById('dirección')
let sinpina = document.getElementById('sinpina')

let boton = document.getElementById('boton')

let rteléfono = document.getElementById('rteléfono')
let rdirección = document.getElementById('rdirección')
let rsinpina = document.getElementById('rsinpina')


// console.log(pregunta)
// console.log(titulo)
// console.log(texto)

const cambio = () => {

//Pinta en la etiqueta el valor dado
titulo.innerHTML = 'Gracias, estos son tus datos'
//texto.innerHTML = 'revisa tus datos'


// .value es el valor del input, en otras palabras lo que el usuario ingresa
    console.log(pregunta.value)
    respuesta.innerHTML = pregunta.value

    console.log(teléfono.value)
    rteléfono.innerHTML = teléfono.value

    console.log(dirección.value)
    rdirección.innerHTML = dirección.value

    console.log(sinpina.value)
    rsinpina.innerHTML = sinpina.value

}
// addEventListener escucha los eventos de HTML
//El primer parametro es el evento
//Segundo parameto es la funcion que queremos ejecutar
boton.addEventListener('click', cambio)