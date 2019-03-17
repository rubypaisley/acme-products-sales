import React from 'react'

const ProductListItem = ({ product, deleteProduct }) => {
    const discount = product.discount * .01 * product.price;
    const reducedPrice = product.price - discount;
    return (
        <li key={product.id}>
            {product.name} <br></br>
            <span style={{ textDecoration: product.price != reducedPrice ? 'line-through' : 'none' }}> {product.price}</span><br></br>
            {product.price !== reducedPrice && <div><span className='badge badge-success'>{reducedPrice}</span><br></br></div>}
            <span className={product.availability == 'instock' ? 'badge badge-success' : 'badge badge-warning'}>{product.availability}</span><br></br>
            <button className='btn btn-danger' onClick={() => deleteProduct(product.id)} >Delete</button>
        </li>
    )
}

export default ProductListItem