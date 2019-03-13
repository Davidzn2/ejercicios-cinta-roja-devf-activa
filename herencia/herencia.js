class Animal{
    constructor(patas, cola){
        this.patas = patas;
        this.cola = cola

    }
    orinar(){
        console.log(`Pshhh tengo ${this.patas} patas`)
    }
}
class Perro extends Animal{
    constructor(patas=4, cola, pulgas){
        super(patas, cola)
        this.pulgas = pulgas
    }
    ladrar(){
        console.log('Waf')
    }
}
class Chango extends Animal{
    constructor(patas, cola, tieneBanana){
        super(patas, cola)
        this.tieneBanana = tieneBanana
    }
    comerBananas(){
        if (this.tieneBanana){
            console.log('Ñam Ñam que rica banana')
        }else{
            console.log('Dame una banana, marro')
        }
    }
}
class ChangoPerro extends Perro extends Chango{
    constructor(patas, cola, pulgas, tieneBanana, mutante){
        super(patas, cola, pulgas, tieneBanana)
        this.mutante = mutante
    }
    soyUnChangoPerrro(){
        console.log(`Por favor matenme`)
    }
}
let changoMarango = new Chango(2, true, false)
let Firulais = new Perro(4, true, true)
let Joaquin = new ChangoPerro(3, true, true, true, true)
