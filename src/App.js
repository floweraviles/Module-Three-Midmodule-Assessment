import React from 'react'
import ProductsList from "./Components/ProductsList";
import ShoppingCart from "./Components/ShoppingCart";
import CheckoutForm from "./Components/CheckoutForm";

class App extends React.Component{
  state = {shoppingCart: []}

  addProduct = (product) => {
    this.setState((prevState)=> {
      return {shoppingCart: [product, ...prevState.shoppingCart]}
    })
  }

  render() {
    const {shoppingCart} = this.state;
    let subtotal = 0;
    shoppingCart.forEach(product => subtotal += product.price)
    console.log(subtotal)
    
    let tax = subtotal * 0.05;
    console.log(tax)

    let total = subtotal + tax;

    

    return (
      <div className="App">
        <ProductsList addProduct={this.addProduct}/>
        <ShoppingCart shoppingCart={this.state.shoppingCart} subtotal={subtotal} tax={tax} total={total}/>
        <CheckoutForm total={total}/>
      </div>
    );
  }
}

export default App;
