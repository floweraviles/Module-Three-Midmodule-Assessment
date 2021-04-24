import React from 'react'
import productData from "../data/productData";
import ProductsListItem from "./ProductsListItem"
import "./ProductsList.css"

const ProductsList = ({addProduct}) => {
    
    const products = productData.map(product => {
        return <ProductsListItem key={product.id} product={product} addProduct={addProduct}/>
    })
    console.log(productData)
    return (

        <section className="Products">
            <h2>My Garage Sale</h2>
            <ul>
                {products}
            </ul>
        </section>
    )
}

export default ProductsList;