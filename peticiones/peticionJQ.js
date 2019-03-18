const URL_BASE = 'https://swapi.co/api/'
function getCharacter(id){
  $.get(`${URL_BASE}people/${id}`,{ crossDomain:true }, function(){
      console.log(arguments)
  })
}

getCharacter(1)
    // getCharacter(2)
    // getCharacter(3)


