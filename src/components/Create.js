import React from 'react';
import Form from './Form';


function Create(props){


    return(
        <React.Fragment>
            <h3>Create New Items</h3>
            <form onCreate={handleFormSubmit}> {/*2. onSubmit we call our local form submssion handler*/}
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
                <textarea
                    rows='5'
                    cols='30'
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
                <button id="add=new-detail" type="submit" >Create</button>
            </form>
        </React.Fragment>

    )



}

export default Create;