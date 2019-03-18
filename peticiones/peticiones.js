const URL_BASE = 'https://swapi.co/api/'
function getCharacter(id){
  axios.get(`${URL_BASE}people/${id}`)
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

