// const ayudante_de_santa = {
//     nombre: "Ayudante de santa",
//     raza: "Galgo",
//     color: "Cafe",
//     genero: "Masculino",
//     programa:"Los Simpson"
// }

const snoopy = {
    nombre: "Snoopy",
    raza: "Beagle",
    color: "Blanco y Negro",
    genero: "Masculino",
    programa:"Charlie Brown"
}

snoopy.ladrar = function (){console.log(`Woof soy ${this.nombre}`)}
snoopy.pishar = function (){console.log("Piiisssshh")}
snoopy.puedeVolar = false
// class Perro{
//     constructor(nombre = "Firulais", raza ="Perro jeje", color = "Amarillo", genero="Macho", programa="Rugrats"){
//         this.nombre = nombre,
//         this.raza = raza,
//         this.color = color,
//         this.genero = genero,
//         this.programa = programa
//     }
//     ladrar(){
//         console.log(`Waf waf, me llamo ${this.nombre}`)
//     }
//     pishar(){
//         console.log("Pshhhh")
//     }
// };
// let correr  => ()
// const Snoopy = new Perro("Snoopy", "Beagle", "Blanco y negro", "Macho", "Charlie Brown")
// const Scooby_Doo = new Perro("Scooby","Gran Danes", "Cafe","Macho", "Scooby Doo")
// const Ayudante_De_Santa = new Perro("Ayudante de Santa","Galgo", "Cafe","Macho", "Los Simpson")
// const Perro_Generico = new Perro()

// Perro_Generico.nombre = "Pushi"