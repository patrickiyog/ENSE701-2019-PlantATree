import React, {Component } from 'react';


export default class ContactUs extends Component {

    render() {
        return(
            <section id = "contact card">
                <div className="title-container">
                    <img 
                        src="https://apairandasparediy.com/wp-content/uploads/2016/07/APAS_Plant-Guide_Featured-Image.jpg" 
                        height={180}
                        width={200}
                    />
                    
                    <div className="title-container">
                        <h4>Contact the PlantATree Team!</h4>
                    </div>

                    <div class="card-body" height={600} width={400}>
                        
                        <h6>Office Hours: 9:00am - 5:00pm</h6>
                        <h6>Email: contact@plantatree.co.nz</h6>
                        <h6>Mobile: 021 937 5927</h6>
                        
                    </div>
                </div>
                <div className="card">
                    <div class="card-body">
                        <form>
                            <h4>Have a Query?</h4>
                            <div class="contact-form">
                                <label for="exampleFormControlInput1"><h6>Name</h6></label>
                                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
                                
                                <label for="exampleFormControlInput2"><h6>Email</h6></label>
                                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>

                                <label for="exampleFormControlInput3"><h6>Phone Number</h6></label>
                                <input type="name" class="form-control" id="exampleFormControlInput1"></input>
                            </div>
                            <div class="contact-form">
                                <label for="exampleFormControlSelect1"><h6>What is your Query About? </h6></label>
                                <select class="contact-form" id="exampleFormControlSelect1">
                                    <option>My Orders</option>
                                    <option>Deliveries and Returns</option>
                                    <option>Product Details</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exammpleFormControlTextArea1"><h6>Message</h6></label>
                                <textarea class="form-control" id="exampleFormControlTextArea1" rows="5"></textarea>
                                <a href="#" class="btn btn-primary">Send Message</a>
                            </div>
                        </form>
                    </div>
                </div>
                
            </section>
            
            
        );
    }
}