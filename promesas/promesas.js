const numeroMenorQueCinco = new Promise((resolve, reject)=>{
    const RANDOM_NUMBER = Math.floor(Math.random()*10)
    setTimeout(
        function(){
            if (RANDOM_NUMBER > 5){
                resolve(RANDOM_NUMBER)
            }else if(RANDOM_NUMBER == 5){
                resolve(`tu numero es ${RANDOM_NUMBER}`)
            }else if(RANDOM_NUMBER < 5){
                reject(new Error(`Es menor que 5, el numero es: ${RANDOM_NUMBER}`))
            }
        }, 1000
    )
})

numeroMenorQueCinco
    .then(resolve => console.log(resolve))
    .catch(error => console.warn(error))