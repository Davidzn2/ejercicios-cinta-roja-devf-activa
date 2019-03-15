// console.log(1)
// console.log(2)
// console.log(3)


// // Ejecución con callback
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// },2000);

// console.log(3)

// const suma = (x,y) => {
//     console.log(x +  y);
// }
// const resta = (x,y) => {
//     console.log(x -  y);
// }
// function otraFuncion(callback) {
//     console.log('Yo voy a sumar o a restar, depende que funcion me pidas');  
//     callback(8,9);
// }
// otraFuncion(suma)
// otraFuncion(resta)
//Cuello de botella
// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// },3000);
// for(let i = 0; i<=1000;i++);
// setTimeout(()=>{
//     console.log(4);
// }, 3000);

const warn = (mensaje) =>{
    console.warn(mensaje)
}
const log = (mensaje) =>{
    console.log(mensaje)
}

function ordenSuperior(callback, mensaje){
    mensaje = mensaje
    callback(mensaje)
}
ordenSuperior(warn, "Hola")
ordenSuperior(log, "Hola")