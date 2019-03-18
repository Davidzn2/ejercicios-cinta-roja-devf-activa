const URL_BASE = 'https://pokeapi.co/api/v2/'
function getCharacter(id){
  $.get(`${URL_BASE}pokemon/${id}`,{ crossDomain:true}, function(){
      console.log(arguments)
  })
}

getCharacter(1)
getCharacter(2)
getCharacter(3)


