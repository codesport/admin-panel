import React from 'react';
import dataFile from './dataFile'
import PropTypes from 'prop-types';


Master.propTypes = {
    propertyFromController: PropTypes.func
};


/**
 *  @summary Stage 2: Lifting up State to the parent component
 * 
 * Builds the list of items with an embedded onClick handler to be displayed by controller
 * 
 * Programmatically builds a list of items using Array.map(). Adds an onClick event to each item. 
 * The event handler is a callback (this.handleSelectedDetail) sent by Controller.js. The 
 * callback accepts a list item's id as a parameter
 * 
 * 
 * @param { any } props 
 */
function Master(props){

    //inline styles using CSS objects
    const formatListCSS = {
        width: '5%',
        align: 'middle',
        margin: '2em',
    }
    console.log('The handleSelectedDetailMethod is stored in the propertyFromController prop:')
    console.log (props.propertyFromController)
    
    return(
        <React.Fragment>
            {dataFile.map( (singleItem, index) => 
                <div key={singleItem.id} onClick={() => props.propertyFromController(singleItem.id)}>
                    <img style={formatListCSS} align="middle" className="spacer" src={require('../'+ singleItem.thumbnail)} alt={singleItem.name} />
                    <span className="spacer">{singleItem.name}&nbsp;&nbsp;&nbsp;</span>
                    <span className="spacer">${singleItem.price}/{singleItem.units}</span>
                    <hr />
                </div>
            )}
        </React.Fragment>


    )


}


export { Master };
