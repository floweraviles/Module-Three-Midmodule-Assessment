import { Component } from 'react'

class CheckoutForm extends Component {
    state = {firstName: "", lastName: "", email: "", creditCard: "", zipCode: ""}

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {total} = this.props;
        const {firstName, lastName, email, creditCard, zipCode} = this.state;
         if (!firstName || !lastName || !email) {
            window.alert("Input is not valid") 
        }else if(creditCard.length !== 16){
            window.alert('Credit card number is not valid');
         
         }else if(zipCode.length !== 5){
             window.alert("Zip code is not valid") 
         }else{

             window.alert(` Purchase complete
                            You will be charged $${total.toFixed(2)}`);
            
        }

    }
    

    render() {
        const {firstName, lastName, email, creditCard, zipCode} = this.state;
        return(
            <section>
                <h2>Checkout</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <br></br>
                    <input id="firstName" name="firstName" onChange={this.handleChange} value={firstName}/>
                    <br></br>
                    <label htmlFor="lastName">Last Name</label>
                    <br></br>
                    <input id ="lastName" name="lastName" onChange={this.handleChange} value={lastName} />
                    <br></br>
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <input id="email" name="email" onChange={this.handleChange} value={email} />
                    <br></br>
                    <label htmlFor="creditCard">Credit Card</label>
                    <br></br>
                    <input id="creditCard" name="creditCard" onChange={this.handleChange} value={creditCard} />
                    <br></br>
                    <label htmlFor="zipCode">Zip Code</label>
                    <br></br>
                    <input id="zipCode" name="zipCode" onChange={this.handleChange} value={zipCode} />
                    <br></br>
                    <button>Buy Now</button>
                 </form>
            </section>
        )
    }
}

export default CheckoutForm;