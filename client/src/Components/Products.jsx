import React from 'react'
import productsdata from '../productsdata.json';
import './Products.css'
const Products = () => {
  return (
    <div>
        <h2>Products Table</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
                {productsdata.map((product)=>(
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    </tr>
                ))}
        </table>
    </div>
  )
}

export default Products
