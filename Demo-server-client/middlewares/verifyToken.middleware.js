import jwt from 'jsonwebtoken';
require('dotenv').config();

//SCHEMA
import User from '../models/user.model';
import Book from '../models/books.model.js';

export default async function ( req, res, next) {
    const token = req.cookies.authToken;
    const user = await User.find();
    const book = await Book.find()
    const sortedBook = book.sort((a,b) => b.soldAmount - a.soldAmount);
    if(!token){
        res.send({
            denied: true,
            dataBestSeller: sortedBook.slice(0,3)
        });

        //res.send(sortedBook );
        return;
    }
    try{
         jwt.verify( token, process.env.TOKEN_SECRET, (err, decode) => {
        });
        // console.log('????');
        // req.user = verified;

    }catch(err){
        //res.status(400).send('Invalid Token');
        console.log('verify');
    }
    console.log('next');
    next();
}