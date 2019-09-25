import React, {Component } from 'react';


export default class QueryPage extends Component {

    render() {
        return(
             <section>
                <form>
                    
                    <div class="contact-form">
                        <label for="exampleFormControlInput1"><h6>Name:</h6></label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
                        
                        <label for="exampleFormControlInput2"><h6>Email:</h6></label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>

                        <label for="exampleFormControlInput3"><h6>Phone Number:</h6></label>
                        <input type="name" class="form-control" id="exampleFormControlInput1"></input>
                    </div>
                    <div class="contact-form">
                        <label for="exampleFormControlSelect1"><h6>What is your Query About? </h6></label>
                        <select class="contact-form" id="exampleFormControlSelect1">
                            <option>My Orders</option>
                            <option>Deliveries and Returns</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exammpleFormControlTextArea1"><h6>Message</h6></label>
                        <textarea class="form-control" id="exampleFormControlTextArea1" rows="5"></textarea>
                        <a href="#" class="btn btn-primary">Send Message</a>
                    </div>
                </form>
            </section>
            

        )

    }
}