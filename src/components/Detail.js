import React from 'react';
import PropTypes from 'prop-types';

/**
 * Master component iterates through DetailSummary
 * @param {*} props 
 */
function DetailSummary ( props ){

    //inline styles using CSS objects
    const detailSummaryCSS = {
        width: '5%',
        align: 'middle',
        margin: '2em',
    }

    return(
        <React.Fragment>
            <img style={detailSummaryCSS} align="middle" className="spacer" src={require('../'+ props.thumbnail)} alt={props.description} />
            {/*<span className="spacer">{props.category}</span>*/}
            <span className="spacer">{props.name}&nbsp;&nbsp;&nbsp;</span>
            <span className="spacer">${props.price}/{props.units}</span>
            <hr />
        </React.Fragment>
    )
    
}


  
//Type Checking Props
DetailSummary.propTypes = {
    description: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    onDetailSelection_layer2: PropTypes.func,
}


/* 
* Named Exports:
* https://stackoverflow.com/a/50073244/946957
* https://dev.to/laurieontech/exports-and-imports-and-defaults-oh-my-fa3
*/
export { DetailSummary };