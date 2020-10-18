import React from 'react';


function Update(props){

    function handleFormSubmit(e){
        e.preventDefault();

        props.onSubmit({
            thumbnail: e.target.thumbnail.value,
            category: e.target.category.value,
            description: e.target.description.value,
            price: parseFloat(e.target.price.value),
            name: e.target.name.value,
            units: e.target.units.value,
            quantity_available: e.target.quantity_available.value,
            id: props.id
        });
    }


    const tableCenterCSS = {
        marginLeft: 'auto', 
        marginRight: 'auto',
        border: '1px solid black',
    }
      
      return (
      <React.Fragment>
        <form onUpdate={handleFormSubmit} id="update-form" />

        <h1>Update Form for <input type='text' name='name' placeholder='(e.g., apples)' value={props.detail.name} required form="update-form" /> Category: <input type='text' name='category' placeholder='prouct category (e.g., fruits)' value={props.detail.category} form="update-form"/></h1>

        <table style={tableCenterCSS}>
            <tbody>
                <tr>
                    <td>
                        <img className="border" src={require('../'+ props.detail.thumbnail)} alt={props.detail.name} /><br />
                        <input type='text' name='thumbnail' placeholder='Thumbnail location (url or file path)' value={props.detail.thumbnail} form="update-form"/>                   
                    </td>
                    <td>
                        <p><strong>Description:</strong><textarea rows='5' cols='30' name='description' placeholder='product description' value={props.detail.description} form="update-form" /></p>
                        <h3>Price: $<input type='number' name='price' placeholder='price per unit' min="0.25" step="0.01" value={props.detail.price} required form="update-form" /> /                
                    <select id="" name="units" required value={props.detail.units} form="update-form" >
                    <option value disabled>--Quantity Units--</option>
                    <option value="lb">lbs</option>
                    <option value="oz">oz</option>
                    <option value="each">units</option></select></h3>
                       <p><strong>Amount in Stock:</strong> <input type='numeric' name='quantity_available' placeholder='3' required 
                       value={props.detail.quantity_available} form="update-form"/>  {props.detail.units}</p>
                    </td>
                </tr>
 
            </tbody>      
        </table>
    
        <hr/>
      </React.Fragment>
    );



}

export default Update;