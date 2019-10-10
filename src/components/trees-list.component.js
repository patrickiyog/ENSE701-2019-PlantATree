import React, { Component } from 'react';
import FilterTreeBar from './filter-tree-bar.component';

export default class TreesList extends Component {

    render() {
        return (

            <section id="Trees Preview">
                <div style={{margin: '16px', position: 'relative'}}>
                Tree Category:
                <FilterTreeBar 
                    items={[
                        { id: 1, value: "Fruit Tree" },
                        { id: 2, value: "Hedge" },
                        { id: 3, value: "Evergreen" },
                        { id: 4, value: "NZ Native" },
                        { id: 5, value: "Gum Tree" },
                        { id: 6, value: "Palm Tree" },
                        { id: 7, value: "Hardwood" }
                    ]}

                />    
                </div>
                <br />
                <div style={{margin: '16px', position: 'relative'}}>
                Price:
                <FilterTreeBar 
                    items={[
                        { id: 1, value: "$1.00 - $5.00" },
                        { id: 2, value: "$5.00 - $10.00" },
                        { id: 3, value: "$10.00 - $20.00" },
                        { id: 4, value: "$20.00 - $30.00" },
                        { id: 5, value: "$30.00 - $40.00" },
                        { id: 6, value: "$40.00 - $50.00" },
                        { id: 7, value: "$50.00 - $60.00" }
                    ]}
                />
                </div>
                <img id="MoenyTree"
                    src="https://www.ikea.com/PIAimages/0121010_PE277826_S5.JPG?f=xxl"
                    style={{ width: 200, height: 200, position: 'absolute', top: 200, left: 450 }}
                    class="img-fluid" alt="money tree"
                />
                <p style={{ position: 'absolute', top: 420, left: 500 }}>
                    Money Tree
                </p>

                <img
                    src="https://www.ikea.com/PIAimages/0121010_PE277826_S5.JPG?f=xxl"
                    style={{ width: 200, height: 200, position: 'absolute', top: 200, left: 750 }}
                />
                <p style={{ position: 'absolute', top: 420, left: 800 }}>
                    Money Tree
                </p>

                <img
                    src="https://www.ikea.com/PIAimages/0121010_PE277826_S5.JPG?f=xxl"
                    style={{ width: 200, height: 200, position: 'absolute', top: 200, left: 1050 }}
                />
                <p style={{ position: 'absolute', top: 420, left: 1100 }}>
                    Money Tree
                </p>

                <img
                    src="https://www.ikea.com/PIAimages/0121010_PE277826_S5.JPG?f=xxl"
                    style={{ width: 200, height: 200, position: 'absolute', top: 470, left: 450 }}
                />
                <p style={{ position: 'absolute', top: 690, left: 500 }}>
                    Money Tree
                </p>

                <img
                    src="https://www.ikea.com/PIAimages/0121010_PE277826_S5.JPG?f=xxl"
                    style={{ width: 200, height: 200, position: 'absolute', top: 470, left: 750 }}
                />
                <p style={{ position: 'absolute', top: 690, left: 800 }}>
                    Money Tree
                </p>

                <img
                    src="https://www.ikea.com/PIAimages/0121010_PE277826_S5.JPG?f=xxl"
                    style={{ width: 200, height: 200, position: 'absolute', top: 470, left: 1050 }}
                />
                <p style={{ position: 'absolute', top: 690, left: 1100 }}>
                    Money Tree
                </p>
            </section>

        )

    }
    
}