import React from 'react';

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

function Master(){

    //inline styles using CSS objects
    const detailSummaryCSS = {
        width: '5%',
        align: 'middle',
        margin: '2em',
    }

    return(
        <React.Fragment>
            {masterList.map( (singleItem, index) => 
            <div key={singleItem.id /*Each child in a list should have a unique key prop. */ }>
                <img style={detailSummaryCSS} align="middle" className="spacer" src={require('../'+ singleItem.thumbnail)} alt={singleItem.description} />
                {/*<span className="spacer">{singleItem.category}</span>*/}
                <span className="spacer">{singleItem.name}&nbsp;&nbsp;&nbsp;</span>
                <span className="spacer">${singleItem.price}/{singleItem.units}</span>
                <hr />
            </div>
            )}    
        </React.Fragment>
    )
}

/** 
* Named Exports
* 
* @tutorial https://stackoverflow.com/a/50073244/946957
* @tutorial https://dev.to/laurieontech/exports-and-imports-and-defaults-oh-my-fa3
*/
export {Master};
