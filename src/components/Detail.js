import React from 'react';
import PropTypes from 'prop-types';

/**
 * Master component iterates through DetailSummary
 * @param {*} props 
 */
function DetailSummary ( props ){
    //inline styles using CSS objects
    const detailSummaryPhotoCSS = {
        width: '5%',
        align: 'middle',
        margin: '2em',
    }

    return(
        <React.Fragment>
        {console.log('Reading Detail Component')}
            <img style={detailSummaryPhotoCSS} align="middle" className="spacer" src={require('../'+ props.thumbnail)} alt={props.description} />
            {/*<span className="spacer">{props.category}</span>*/}
            <span className="spacer">{props.name}&nbsp;&nbsp;&nbsp;</span>
            <span className="spacer">${props.price}/{props.units}</span>
            <hr />
        </React.Fragment>
    )
    
}


  
function DetailFull(props){

    console.log(props);
    const {selectedDetail} = props //object destructuring with props otherwise do props.nameSentToComponent.propertyname

    const tableCenterCSS = {
        marginLeft: 'auto', 
        marginRight: 'auto',
        border: '1px solid black',
    }
      
      return (
      <React.Fragment>
        <h1>Full Detail for {selectedDetail.name} Category: {selectedDetail.category}</h1>
        <table style={tableCenterCSS}>
            <tbody>
                <tr>
                    <td><img className="border" src={require('../'+ selectedDetail.thumbnail)} alt={selectedDetail.name} /></td>
                    <td>
                        <p><strong>Description:</strong> {selectedDetail.description}</p>
                        <h3>Price: ${selectedDetail.price}/{selectedDetail.units}</h3>
                       <p><strong>Amount in Stock:</strong> {selectedDetail.quantity_available} {selectedDetail.units}</p>
                    </td>
                </tr>
 
            </tbody>      
        </table>
    
        <hr/>
      </React.Fragment>
    );
  }
  


DetailSummary.propTypes = {
    description: PropTypes.string,
    price: PropTypes.number, /*why is this behaving like a string?*/
    quantity: PropTypes.number,
    onDetailSelection_layer2: PropTypes.func,
}


DetailFull.propTypes = {
    detail: PropTypes.object
  };

/* 
* Named Exports:
* https://stackoverflow.com/a/50073244/946957
* https://dev.to/laurieontech/exports-and-imports-and-defaults-oh-my-fa3
*/
export { DetailSummary, DetailFull };