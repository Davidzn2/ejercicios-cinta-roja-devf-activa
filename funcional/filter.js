// FILTER

var personas = [
    {name:'David',edad:13},
    {name:'Salo',edad:11},
    {name:'Moy',edad:16},
    {name:'Abby',edad:19},
    {name: 'Jorge', edad: 22}
]

let mayorDeEdad = personas.filter((persona)=>{
    return persona.edad >= 18;
})
let menorDeEdad = personas.filter((persona)=>{
    return persona.edad < 18;
})
console.log(personas)
console.log(mayorDeEdad)
console.log(menorDeEdad)