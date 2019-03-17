const Sequelize = require('sequelize');
const db = require('./db');
const Product = require('./Product')

const syncAndSeed = () => {
    return db.sync({ force: true })
        .then(() => Promise.all([
            Product.create({ name: 'ice cream', price: 5, discount: 20 }),
            Product.create({ name: 'pasta', price: 10, discount: 10 }),
            Product.create({ name: 'paper towels', price: 8, availability: 'backordered' }),
            Product.create({ name: 'garlic bread', price: 10, discount: 5, availability: 'discontinued' }),
        ]))
        .then((createdProd) => createdProd.forEach(prod => console.log(prod)))
        .catch(e => console.log('oh no! there was an error!' + e))
}

module.exports = {
    syncAndSeed,
    models: {
        Product
    }
}
