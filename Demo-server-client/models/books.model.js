import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    bookName: String,
    author: String,
    date: String,
    content: String,
    img: String,
    soldAmount: Number
});

const Book = mongoose.model('Book', bookSchema, 'books');

export default Book;