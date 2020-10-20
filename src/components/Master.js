import React from 'react';
import { DetailSummary } from './Detail';

export const masterList = [

    {
    id: '1',        
    category: 'Fruits',
    description: 'Organic black grapes from our estate. Sold by the pound',
    name: 'Organic Black Grapes',
    price: 2.99,
    quantity_available: 100,
    thumbnail: 'images/black-grapes.jpg',
    units: 'lb'
    },

    {
        id: '2',        
        category: 'Fruits',
        description: 'Organic red plumbs from our local farm. Sold by the pound',
        name: 'Organic Plums',
        price: 3.99,
        quantity_available: 50,
        thumbnail: 'images/red-plum.jpg',
        units: 'lb'
    },

    {
        id: '3',        
        category: 'Vegetables',
        description: ' Organic dino kale. Fresh from our farm. Sold by the bunch',
        name: 'Organic Dino Kale',
        price: 0.79,
        quantity_available: 10,
        thumbnail: 'images/dino-kale.jpg',
        units: 'unit'
    },

]

function Master( props ){

    //inline styles using CSS objects
    const detailSummaryCSS = {
        width: '5%',
        align: 'middle',
        margin: '2em',
    }

    return(
        <React.Fragment>

        masterList.map( (singleItem, index) => 
            <img style={detailSummaryCSS} align="middle" className="spacer" src={require('../'+ props.thumbnail)} alt={props.description} />
            {/*<span className="spacer">{props.category}</span>*/}
            <span className="spacer">{props.name}&nbsp;&nbsp;&nbsp;</span>
            <span className="spacer">${props.price}/{props.units}</span>
            <hr />

        )    
        </React.Fragment>
    )
}

export {Master};
