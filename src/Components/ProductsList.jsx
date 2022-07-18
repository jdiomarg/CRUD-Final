import React from 'react';

const ProductsList = ({ products }) => {
    return (
        <ul>
            {
                products.map(products => (
                    <li key={products.id}>
                        <h3>{products.name}</h3>
                        <div><b>Category: </b> {products.category}</div>
                        <div><b>Price: </b> {products.price}</div>
                        <div><b>isAvailable: </b>{products.isAvailable.toString()}</div>
                    </li>
                ))
            }
        </ul>
    );
};

export default ProductsList;