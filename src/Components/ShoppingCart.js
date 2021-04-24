import React from 'react'

const ShoppingCart = ({shoppingCart, subtotal, tax, total}) => {
    return(
        <section>
            <h2>Cart</h2>
            <ul>
                {shoppingCart.map(product => {
                    const {name, price} = product
                    return <li>{name}: ${price}</li>
                })}
            </ul>
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            
            <h3>Tax: ${tax.toFixed(2)}</h3>

            <h3>Total: ${total.toFixed(2)} </h3>
        </section>
    )
}

export default ShoppingCart;