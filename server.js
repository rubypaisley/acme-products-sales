const express = require('express');
const app = express();
const path = require('path');
const syncAndSeed = require('./db/index').syncAndSeed;
const { Product } = require('./db/index').models;


const port = process.env.PORT || 3000;

app.get('/app.js', (req, res, next) => res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/products', (req, res, next) => {
    Product.findAll()
        .then(products => res.send(products))
        .catch(next)
});

app.post('/api/products', (req, res, next) => {
    Product.create(req.body)
        .then(product => res.send(product))
        .catch(next)
});



app.delete('/api/products/:productId', (req, res, next) => {
    Product.destroy({
        where: {
            id: req.params.productId
        }
    })
        .then(() => res.sendStatus(204))
        .catch(next)
});




syncAndSeed()
    .then(() => app.listen(port, () => console.log(`listening on port ${port}`)))

