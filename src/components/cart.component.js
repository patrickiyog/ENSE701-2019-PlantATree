import React, {Component } from 'react';

export default class Cart extends Component {

    render() {
    
        return(
            
            <section id="payment-and-shipping">

            
                <div className="title-container">
                    <h3> Purchase Summary</h3>
                </div>

                <div className="card">
                    <h5>Your Cart Items:</h5>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                </div>

                <div className="title-container">

                    <div className="title-container">
                        <h3>Payment and Shipping</h3>
                    </div>

                </div>

                <div className="card">

                    <h6>How Would You Like To Receive Your Order?</h6>

                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
                        <label class="custom-control-label" for="customRadioInline1">Delivery</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline2" name="customRadioInline2" class="custom-control-input"/>
                        <label class="custom-control-label" for="customRadioInline2"> Pick-Up Instore</label>
                    </div>

                </div>


                <div className="title-container">
                    <h4>Delivery Details</h4>
                    <p>note that a $10 delivery fee will be applied to the overall order / same day delivery for orders placed before 12pm*</p>
                </div>
              

                <div className="card">
                   
                    
                    <div className="card-body">
                        <form>
                            <div class="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputName4">Name</label>
                                    <input type="name" class="form-control" id="inputName4" placeholder="Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4"> Email </label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="123 House Street"/>
                            </div>

                            <div className="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, Studio, Floor"/>
                            </div>

                            <div class="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputState">State</label>
                                    <input type="text" class="form-control" id="inputCity"/>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip"/>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                

                <div className="title-container">
                        <h4>Pick Up Details</h4>
                        <p>same day pick-up for orders placed before 12pm* </p>
                </div>

                <div className="card">
                    
                    
                    <div className="card-body">
                        <form>
                            <div class="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputName4">Name</label>
                                    <input type="name" class="form-control" id="inputName4" placeholder="Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputNumber"> Phone Number </label>
                                    <input type="number" class="form-control" id="inputNumber" placeholder="021 937 5927"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="inputDate">Pick Up Date</label>
                                <input type="text" class="form-control" id="inputDate" placeholder="25 December 2019"/>
                            </div>

                            

                        </form>
                    </div>
                </div>

               <footer>
                   <p></p>
                   <p>Terms and Conditions</p>
                   <p> * delivery: please allow 2-3 business days for delivery if the order does not satisfy same day delivery. Same day delivery applies if PlantATree has the product in stock.</p>
                   <p> * pick-up: please allow 1-2 business days for in-store pickup if the order does not satisfy same day pick-up conditions. Same day pick-up applies if PlantATree has the products in stock. </p>
               </footer>

            </section>  
            
           
        )
        
    }
}