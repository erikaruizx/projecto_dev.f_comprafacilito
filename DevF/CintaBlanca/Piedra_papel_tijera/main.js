//---------------------- Piedra papel o tijera -------------
// 2 jugadores  ----> propts
//Consola mostrar que jugador gano.

// ---> .toUpperCase()   -> todo a mayuscula
// ---> .toLowerCase()  -> todo a minuscula


// var player1 = prompt('Elige piedra, papel o tijera').toLowerCase()
// var player2 = prompt('Elige piedra, papel o tijera').toLowerCase()
// // console.log(player1)
// console.log(player2)

// if(player1 === player2){
//     console.log('Empate')
// }else if(player1 === 'papel' && player2 === 'piedra' || player1 === 'tijera' && player2 === 'papel' || player1 === 'piedra' && player2 === 'tijera' ){
//     console.log('Gana player 1')
// }else if(player2 === 'papel' && player1 === 'piedra' || player2 === 'tijera' && player1 === 'papel' || player2 === 'piedra' && player1 === 'tijera'){
//     console.log('Gana jugador 2')
// }else{
//     console.error('Algo no salio como se esperaba')
// }

//---------- 💩 PPT Complicado 💩 -------- >

var userAnswer = prompt('Ingresa Piedra, Papel o Tijera').toLowerCase()

//PC
var pcAnswer = ''

// Math es el metodo de js para usar funciones matematicas
// .floor --> regresa el minimo o el maxio ----> (0, 5) regresa *0, 1, 2, 3, 4, 5 *
let options = Math.floor((Math.random() * 3) + 1 )

if(options === 1){ pcAnswer = 'piedra' }
if(options === 2) { pcAnswer = 'papel' }
if(options === 3) { pcAnswer = 'tijera' } 

if(userAnswer === pcAnswer){
    console.log('Es un empate porque: ')
    console.log('User: ' + userAnswer)
    console.log('PC: ' + pcAnswer)
}else if(pcAnswer === 'papel' && userAnswer === 'piedra' || pcAnswer === 'tijera' && userAnswer === 'papel' || pcAnswer === 'piedra' && userAnswer === 'tijera' ){
    console.log('Gana la PC porque :')
    console.log('User: ' + userAnswer)
    console.log('PC: ' + pcAnswer)
}else if(userAnswer === 'papel' && pcAnswer === 'piedra' || userAnswer === 'tijera' && pcAnswer === 'papel' || userAnswer === 'piedra' && pcAnswer === 'tijera'){
    console.log('Gana la User porque :')
    console.log('User: ' + userAnswer)
    console.log('PC: ' + pcAnswer)
}else{
    console.error('Ingresa bien tus opciones')
}

