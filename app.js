const books = require('./data.js')
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/books', (req, res) => {
    res.json(books)
})

app.get('/books/:id', (req, res) => {
    //create variable from request
    const id = Number(req.params.id);

    //find correct book by id
    const reqBook = books.inventory.find((book) => book.id === id);
    //return correct book
    res.json(reqBook);
})

module.exports = app;