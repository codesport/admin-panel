import React from 'react';



function Header(props){

    //inline styles using CSS objects
    const styledHeader = {
        color: 'brown',
        marginLeft:'2em',
        /*marginRight:'2em',*/
    }

    return(
        <React.Fragment>
            <h3 style={styledHeader}>Arroyo Family Farms Inventory List</h3>
            <h4 style={styledHeader}>Total Unique Items: {props.masterList.length}</h4>
        </React.Fragment>

    )
}
/**
 * if you’re building a list, store the list in an array; don’t keep a separate state variable for the count. 
 * Instead, when you want to render the list count, take the length of the  array
 */

export default Header;