const express = require('express');
const books = require('./data.js');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})