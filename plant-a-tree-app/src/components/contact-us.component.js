import React, {Component } from 'react';


export default class ContactUs extends Component {

    render() {
        return(
            <section id = "contact card">
                <div className="card">
                    <img src="contactplant.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h4>Contact the PlantATree Team!</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go Somewhere</a>
                    </div>
                </div>
            </section>
        )
    }
}