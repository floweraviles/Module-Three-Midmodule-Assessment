import React from 'react'



const ProductsListItem = ({product, addProduct}) => {
    const { name, price, img, description } = product;
    return (
        <li>
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <button onClick={() => addProduct(product)}>Add To Cart</button>
            <img src={img} alt="Product" />
            <p>{description}</p>
        </li>
    )
}

export default ProductsListItem;