// MAP

const numeros = [9, 16, 81]
numerosAlCuadrado = numeros.map( (numero)=>{
	return numero ** 2
});

console.log(numeros)
console.log(numerosAlCuadrado)

var roots = numeros.map(Math.sqrt)

console.log(roots)