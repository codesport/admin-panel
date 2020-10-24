import React from 'react';

function Header(props){

    //inline styles using CSS objects
    const styledHeader = {
        color: 'brown',
        marginLeft:'2em',
    }

    /**
     * Computes and displays the size of our inventory
     * 
     * Receives a prop from Controller.js containing the inventory list. It then computes
     * the number of items in the list through JavaScript's Array.length property
     * 
     * Pro Tip: If you’re building a list, store the list in an array. And, don’t
     * keep a separate state variable for the count. Instead, when you want to render
     * the list count, take the length of the array.
     * 
     *   Source: {@link https://reactjs.org/docs/thinking-in-react.html| Thinking in React}
     */
    return(
        <React.Fragment>
            <h3 style={styledHeader}>Arroyo Family Farms Inventory List</h3>
            <h4 style={styledHeader}>Total Unique Items: {props.masterList.length}</h4>
        </React.Fragment>
    )
}

export default Header;