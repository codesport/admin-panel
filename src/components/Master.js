import React from 'react';
//import DetailSummary from './Detail';

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
        units: 'each'
    },

]

function Master(props){

    //inline styles using CSS objects
    const detailSummaryCSS = {
        width: '5%',
        align: 'middle',
        margin: '2em',
    }
    console.log (props.onClick)
    return(
        <React.Fragment>
            {masterList.map( (singleItem, index) => 
                <div key={singleItem.id} onClick={() => props.onClick(singleItem.id)}>
                    <img style={detailSummaryCSS} align="middle" className="spacer" src={require('../'+ singleItem.thumbnail)} alt={singleItem.name} />
                    <span className="spacer">{singleItem.name}&nbsp;&nbsp;&nbsp;</span>
                    <span className="spacer">${singleItem.price}/{singleItem.units}</span>
                    <hr />
                </div>
            )}
        </React.Fragment>


    )


}

/*
function Master_Version2(){
    return(
        <React.Fragment>
            {masterList.map( (singleItem, index ) =>
                <DetailSummary
                    onClick = {singleItem.onClick}
                    thumbnail={singleItem.thumbnail}
                    category={singleItem.category}
                    description = {singleItem.description}
                    price = {singleItem.price}
                    quantity = {singleItem.quantity}
                    units = {singleItem.units}
                    name={singleItem.name}
                    key= {singleItem.id} //if data does not have a unique id, use index      
                />
            )}
        </React.Fragment>
    )
}
*/




export {Master};
