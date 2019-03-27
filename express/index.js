const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8000


//Configuración para poder recibir el body
app.use(bodyParser.json());

app.get('/', (request, response)=>{
    response.send('<p>Hello world</p>')
})

app.get('/saludar/:nombre', (req, res)=>{
    let nombre = req.params.nombre
    res.send(
        `<h2>Hola ${nombre}</h2>`
    )
})

app.get('/archivo',function(req,res) {
    res.sendFile(path.join(__dirname+'/html/index.html'));
});

app.get('/personaje/:uid',(require,response) => {
    console.log(require.params);
    const uid = require.params.uid
    response.send({
        message:`Personaje buscado: ${uid}`
    })
});

app.get('/api/suma', (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = (parseInt(num1) + parseInt(num2));
    res.status(200).send({ resultado });
});


app.post('/create/user', (require, response)=>{
    const {name,last_name,age,is_active} = require.body;
    response.status(201).send({
        id:'19',
        name,
        last_name,
        age,
        is_active
    });

})

app.use('/static', express.static(__dirname + '/static'));

app.listen(PORT, () =>{
    console.log(`Tu servidor esta corriendo en el puerto ${PORT}`);
});
