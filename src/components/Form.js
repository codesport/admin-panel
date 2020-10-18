import React from 'react';
import { v4 } from 'uuid';


function Form( props ){

    function handleFormSubmit(e){
        e.preventDefault();

        props.onSubmittingForm({

            thumbnail: e.target.thumbnail.value,
            category: e.target.category.value,
            description: e.target.description.value,
            price: parseFloat(e.target.price.value),
            name: e.target.name.value,
            units: e.target.units.value,
            quantity_available: e.target.quantity_available.value,
            id: v4()

        });


    }


    return(//name, quantity, price, and units required
        <React.Fragment>
            <h3>Create New Items</h3>
            <form onSubmit={handleFormSubmit}>
            <label>Image</label>
            <div>
                <input
                    type='text'
                    name='thumbnail'
                    placeholder='Thumbnail location (url or file path)'
                    
                />
            </div>
            <label>Category</label>
            <div>
                 <input
                    type='text'
                    name='category'
                    placeholder='prouct category (e.g., fruits)'
      
                />
            </div>
            <label>Item Name*</label>
            <div>    
                 <input
                    type='text'
                    name='name'
                    placeholder='(e.g., apples)'
                    required 
                />
            </div>
            <label>Description</label>

            <div>
                <input
                    type='text'
                    name='description'
                    placeholder='product description'
                />
            </div>                                 
            <label>Unit Price*</label>
            <div>
                <input
                    type='number'
                    name='price'
                    placeholder='price per unit'
                    min="0.25"
                    step="0.01"
                    required 
                />
            </div>
            <label>Quanity Available*</label>
            <div>    
                <input
                    type='numeric'
                    name='quantity_available'
                    placeholder='3'
                    required
                /> 
            </div>
            <label>Quantity Units*</label>
            <div>
                <select id="" name="units" required>
                    <option value disabled>--Quantity Units--</option>
                    <option value="lb">lbs</option>
                    <option value="oz">oz</option>
                    <option value="each">units</option>                        
                </select>                                   
            </div>    
                <button id="add=new-detail" type="submit" >Submit</button>
            </form>
            
        </React.Fragment>


    )

}


export default Form;
