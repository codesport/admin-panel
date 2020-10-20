import React from 'react';
import { checkImagePath, formatBundleTotalInventoryDsiplay } from './ReusableHousekeepingFunctions';
import PropTypes from 'prop-types';

/**
 * Detail component for selected item
 * @param {*} props 
 */  
function DetailFull(props){

    console.log(props);
    const {selectedDetail} = props //object destructuring with props otherwise do props.nameSentToComponent.propertyname
      
      return (
      <React.Fragment>
        <h1>Full Detail for {selectedDetail.name} Category: {selectedDetail.category}</h1>
        <div className="divTable">
            <div className="divTableBody">
                <div className="divTableRow">
                    <div className="divTableCell"><img className="border" src={ checkImagePath( selectedDetail.thumbnail ) } alt={selectedDetail.name} /></div>
                    <div className="divTableCell" id="align-metadata">
                        <p><strong>Description:</strong> {selectedDetail.description}</p>
                        <h3>Price: ${selectedDetail.price}/{selectedDetail.units}</h3>
                        <p><strong>Amount in Stock:</strong> {selectedDetail.quantity_available} { formatBundleTotalInventoryDsiplay(selectedDetail.units) }</p>
                    </div>
                </div>
            </div>
        </div>   
        <hr/>
      </React.Fragment>
    );
  }
  


DetailFull.propTypes = {
    selectedDetail: PropTypes.object
  };

/* 
* Named Exports:
* https://stackoverflow.com/a/50073244/946957
* https://dev.to/laurieontech/exports-and-imports-and-defaults-oh-my-fa3
*/
export { DetailFull };