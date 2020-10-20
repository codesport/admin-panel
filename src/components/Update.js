import React from 'react';
import { checkImagePath } from './ReusableHousekeepingFunctions';

function Update(props){

    function handleFormSubmit(e){
        e.preventDefault();

        props.onCallbackSubmit({
            thumbnail: e.target.thumbnail.value,
            category: e.target.category.value,
            description: e.target.description.value,
            price: parseFloat(e.target.price.value),
            name: e.target.name.value,
            units: e.target.units.value,
            quantity_available: e.target.quantity_available.value,
            id: props.detail.id
        });
    }


    const tableCenterCSS = {
        marginLeft: 'auto', 
        marginRight: 'auto',
        border: '1px solid black',
    }

    const descriptionBoxCSS ={
        marginLeft: '8em',
    }

    const descriptionTextCSS = {
        position: 'absolute'
    }
    
    const inventoryTextCSS = {
        marginBottom: '-1.5em'
    }
      
    return (
      <React.Fragment>
        <form onSubmit={handleFormSubmit} id="update-form" />

        <h1>Update Form for <input type='text' name='name' defaultValue={props.detail.name} required form="update-form" /> Category: <input type='text' name='category'  defaultValue={props.detail.category} form="update-form"/> <button id="add=new-detail" type="submit" form="update-form" >Update</button>  </h1>

        <table style={tableCenterCSS}>
            <tbody>
                <tr>
                    <td>
                        <img className="border" src={ checkImagePath( props.detail.thumbnail ) } alt={props.detail.name} /><br />
                        <input type='text' name='thumbnail' placeholder='Thumbnail location (url or file path)' defaultValue={props.detail.thumbnail} size="50" form="update-form"/>                   
                    </td>
                    <td>
                        <p><strong style={descriptionTextCSS}>Description:</strong><textarea style={descriptionBoxCSS} rows='5' cols='30' name='description' placeholder='product description' defaultValue={props.detail.description} form="update-form" /></p>
                        <h3>Price: $<input type='number' name='price' placeholder='price per unit' min="0.25" step="0.01" defaultValue={props.detail.price} required form="update-form" />/                
                    <select id="" name="units" required defaultValue={props.detail.units} form="update-form" >
                    <option value disabled>--Quantity Units--</option>
                    <option value="lb">lbs</option>
                    <option value="oz">oz</option>
                    <option value="each">units</option></select></h3>
                       <p style={inventoryTextCSS}><strong>Amount in Stock:</strong> <input type='numeric' size="5" name='quantity_available' placeholder='3' required 
                       defaultValue={props.detail.quantity_available} form="update-form"/>  {props.detail.units}</p>
                    </td>
                </tr>
 
            </tbody>      
        </table>
    
        <hr/>
      </React.Fragment>
    );



}

export default Update;