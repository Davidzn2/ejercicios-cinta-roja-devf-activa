const express = require('express');
const bodyParser = require('body-parser');
const {Book, Author} = require('./DB');
const PORT = 3000

const app = express();

require('./routes')(app)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());



app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});