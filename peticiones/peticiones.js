const URL_BASE = 'https://swapi.co/api/'
function getCharacter(id){
  axios.get(`${URL_BASE}people/${id}`)
    .then(function(response) {
      return response.data.name ;
      
  })
  .catch(function(error) {
    console.log(error);
  });
}
let b = getCharacter(1)


