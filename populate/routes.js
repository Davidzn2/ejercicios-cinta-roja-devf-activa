module.exports = function(app){
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
        Book.find({}, function(err, books){
            Author.populate(books, {path:"autor"},function(err,books){
                res.status(200).send(books);
            })
        })
    });
    
    
    app.get('/book/:id',(req,res) => {
        const {id} = req.params;
        Book.findById(id, function(err, book){
            Author.populate(book, {path:"autor"},function(err,book){
                res.status(200).send(book);
            })
        })
    });
    
    app.put('/book/:id',(req,res) => {
        const {id} = req.params;
        Book.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
            .then(book => res.send(book))
            .catch(err => res.status(409).send(err))
        });
        
}
