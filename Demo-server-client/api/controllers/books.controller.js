import Book from '../../models/books.model.js';

module.exports.viewBooks = async (req, res) => {
    const book = await Book.find();
    const bookClone = [].concat(book);
    res.json({
        denied: false,
        dataAllBooks: book,
        dataBestSeller: bookClone.sort((a,b) => b.soldAmount - a.soldAmount).slice(0,3)
    });
}