import React from 'react'
import ProductListItem from './ProductListItem'

const Products = ({ products, deleteProduct }) => {
    return (
        <ul className="list-group">
            {
                products.map((product) => {
                    return (
                        <ProductListItem product={product} deleteProduct={deleteProduct} />
                    )
                })
            }
        </ul>
    )
}

export default Products