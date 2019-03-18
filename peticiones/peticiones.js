const URL_BASE = 'https://pokeapi.co/api/v2/'
function getCharacter(id){
  axios.get(`${URL_BASE}pokemon/${id}`)
    .then(function(response) {
    console.log(response.data);
  })
    .catch(function(error) {
    console.log(error);
  });
}

getCharacter(1)
getCharacter(2)
getCharacter(3)


