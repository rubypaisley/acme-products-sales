const Sequelize = require('sequelize');
const db = require('./db');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    availability: {
        type: Sequelize.ENUM('instock', 'backordered', 'discontinued'),
        defaultValue: 'instock'
    }
});

module.exports = Product