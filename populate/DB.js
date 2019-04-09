var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/myBooks', {useNewUrlParser: true});

var autorSchema = new Schema({
	nombre: String,
    biografia: String,
    fecha_de_nacimiento: Date,
    nacionalidad: String
});
var libroSchema = new Schema({
	titulo: String,
    paginas: Number,
    isbn: String,
    autor: { type: Schema.ObjectId, ref: "Autor" } 
});

Author = mongoose.model('Author', autorSchema);
Book = mongoose.model('Book', libroSchema);

module.exports = { Author, Book }