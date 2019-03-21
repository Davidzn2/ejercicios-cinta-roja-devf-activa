const request = require('request')

const URL = 'https://swapi.co/api/people/1/'

request.get(URL,(response, error, body)=>{
  const json = JSON.parse(body)
  console.log(json.name)
})



