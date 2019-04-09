const express = require('express');
const bodyParser = require('body-parser');
const {Author,Book} = require('./DB');
const PORT = 3000

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send({message:'Inicial'})
});

app.post('/create/author',(req,res) => {
    const {nombre,biografia,fecha_de_nacimiento,nacionalidad} = req.body;
    const newauthor = Author({nombre,biografia,fecha_de_nacimiento,nacionalidad});
    newauthor.save((err,author) => {
        err
        ? res.status(409).send(err)
        : res.status(201).send(author)
    });
});


app.post('/create/book',(req,res) => {
   const {titulo, paginas, isbn, autor} = req.body; 
   const newBook = Book({titulo, paginas, isbn, autor});
   newBook.save((err,book) => {
       err 
       ? res.status(409).send(err) 
       : res.status(201).send(book)
   });
});

app.get('/all/books',(req,res) => {
    Book.find()
    .populate()
    .exec()
    .then(res.status(200).send(books))

        
});

app.get('/book/:id',(req,res) => {
    const {id} = req.params;
    Book.findById(id).exec()
        .then(book => book ? res.send(book) : res.status(404).send({message:'Book not found'}))
        .catch(err => res.status(409).send(err))
});



app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});