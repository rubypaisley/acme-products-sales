import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import Products from './Products'
import CreateProduct from './CreateProduct'

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
        this.getData = this.getData.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id) {
        return axios.delete(`/api/products/${id}`)
            .then(() => this.getData())
    }

    getData() {
        return axios.get('/api/products')
            .then(products => this.setState({ products: products.data }))
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        const products = this.state.products;
        const productCount = products.length;
        const sales = products.filter(product => product.discount != 0 && product.availability == 'instock');
        const salesCount = sales.length;
        return (
            <div>
                <h1>Acme Products/Sales</h1>
                <Nav productCount={productCount} salesCount={salesCount} />
                <Route exact path="/" />
                <Route exact path="/products" render={() => { return <Products products={products} deleteProduct={this.deleteProduct} /> }} />
                <Route exact path="/products/sales" render={() => { return <Products products={sales} deleteProduct={this.deleteProduct} /> }} />
                <Route exact path="/products/create" component={CreateProduct} />

            </div>

        )
    }
}

export default App