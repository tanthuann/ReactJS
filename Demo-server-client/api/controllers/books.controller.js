import Book from '../../models/books.model.js';

module.exports.viewBooks = async (req, res) => {
    const book = await Book.find();
    res.json({
        denied: false,
        dataAllBooks: book,
        dataBestSeller: book.sort((a,b) => b.soldAmount - a.soldAmount).slice(0,3)
    });
}