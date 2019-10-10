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

                <img id="MoneyTree"
                    src="https://www.ikea.com/PIAimages/0121010_PE277826_S5.JPG?f=xxl"
                    style={{width: 200, height: 200, position: 'absolute', top: 200, left: 300}}
                    class="img-fluid" alt="money tree"
                />
                <p style={{position: 'absolute', top: 420, left: 350}}>
                    Money Tree
                </p>
                
                <img
                    src="https://1.bp.blogspot.com/-CIdqGLQfq2g/XZvrLIH9RLI/AAAAAAAADYk/qpVR2Hv6QswlzcVZ86SozELcOOWOvlSgwCLcBGAsYHQ/s320/Elephant%2BEar.jpg"
                    style={{width: 200, height: 200, position: 'absolute', top: 200, left: 600}}
                />
                <p style={{position: 'absolute', top: 420, left: 650}}>
                    Elephant Ear Tree
                </p>

                <img
                    src="https://1.bp.blogspot.com/-pFhLWSbzoLE/XZvrLVIeCvI/AAAAAAAADYs/E6oXENKDKuocGjKUUVhgNpbhSe6_lnitACLcBGAsYHQ/s320/Fiddle%2BLeaf%2BFig.jpg"
                    style={{width: 200, height: 200, position: 'absolute', top: 200, left: 900}}
                />
                <p style={{position: 'absolute', top: 420, left: 950}}>
                    Fiddle Leaf Fig
                </p>

                <img
                    src="https://1.bp.blogspot.com/-S3N5603Mcg4/XZvrMszDyUI/AAAAAAAADYw/3wgrBlYG_lIDIuUX46f1iZvd5HMZsuaugCLcBGAsYHQ/s320/Monstera.jpg"
                    style={{width: 200, height: 200, position: 'absolute', top: 470, left: 300}}
                />
                <p style={{position: 'absolute', top: 690, left: 350}}>
                    Monstera
                </p>

                <img
                    src="https://1.bp.blogspot.com/-QPN_le6QgPs/XZvrMnfzl_I/AAAAAAAADY0/tMGX7ZRX3y4yJyB9UuC2xi_umBcDDgqvQCLcBGAsYHQ/s320/Peace%2BLily.jpg"
                    style={{width: 200, height: 200, position: 'absolute', top: 470, left: 600}}
                />
                <p style={{position: 'absolute', top: 690, left: 650}}>
                    Peace Lily
                </p>

                <img
                    src="https://1.bp.blogspot.com/-ESqkDlLuapk/XZvrM5ZZZKI/AAAAAAAADY4/c-avZFUxIdQ-CzDMjhvH5p_tOv2zKwyJACLcBGAsYHQ/s320/Snake%2BPlant.jpg"
                    style={{width: 200, height: 200, position: 'absolute', top: 470, left: 900}}
                />
                <p style={{position: 'absolute', top: 690, left: 950}}>
                    Snake Plant
                </p>

            </section>

        )

    }
    
}