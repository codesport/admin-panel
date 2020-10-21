import React from 'react';

function Header(props){

    //inline styles using CSS objects
    const styledHeader = {
        color: 'brown',
        marginLeft:'2em',
        /*marginRight:'2em',*/
    }

    /**
     * "Figure out the absolute minimal representation of the state your application needs
     * and compute everything else you need on-demand."
     * 
     * "If you’re building a list, store the list in an array. And, don’t keep a separate 
     * state variable for the count. Instead, when you want to render the list count, take
     * the length of the array"
     * 
     * @tutorial https://reactjs.org/docs/thinking-in-react.html
     */
    return(
        <React.Fragment>
            <h3 style={styledHeader}>Arroyo Family Farms Inventory List</h3>
            <h4 style={styledHeader}>Total Unique Items: {props.masterList.length}</h4>
        </React.Fragment>

    )
}

export default Header;