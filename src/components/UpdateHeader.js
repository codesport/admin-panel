import React from 'react';

function UpdateHeader(props){

    const styledHeader = {
        color: 'brown',
    }


    function handleFormSubmit(event){
        event.preventDefault();

        props.onCallbackSubmit({
            header: event.target.header.value,
        });
    }


      
    return (
      <React.Fragment>
        <form onSubmit={handleFormSubmit} id="update-form" />
            <h3 style={styledHeader}>New Header: <input type='text' name='header' defaultValue={props.header} required form="update-form" size="50" />
                <button className="btn btn-primary btn-sm" type="submit" form="update-form" >Update</button>
            </h3>
            <h4 style={styledHeader}>Total Inventory: {props.masterList.length}</h4>
  
      </React.Fragment>
    );



}

export default UpdateHeader;