import React from 'react';
import PropTypes from 'prop-types';


Detail.propTypes = {
    detail: PropTypes.object
};


function Detail(props){
    const {selectedDetail} = props //object destructuring with props otherwise do props.nameSentToChild.propertyName

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
  

/* 
* Named Exports:
* https://stackoverflow.com/a/50073244/946957
* https://dev.to/laurieontech/exports-and-imports-and-defaults-oh-my-fa3
*/
export default Detail;