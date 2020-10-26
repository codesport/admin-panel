import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

/**
 * Enable strict typechecking
 * 
 * @tutorial https://reactjs.org/docs/typechecking-with-proptypes.html
 */
Create.propTypes = {
    onCallbackSubmit: PropTypes.func
  };


/**
 * Displays form to collect data from user. 
 * 
 * On submit, data is sent to parent to process:
 * 
 *  1. <form onSubmit={handleFormSubmit}>: Call local form submission handler ( i.e., handleFormSubmit(event) )
 * 
 *  2. function handleFormSubmit(event): Unpack callback from parent (i.e, props.onCallbackSubmit={this.handleCreate} )
 * 
 *  3. this.handleCreate(creation): Control.js method to process form submission. Accepts one parameter which is an object
 * 
 * @param {function} props - callback function sent from Controller method this.handleCreateFormView()
 *                           via <Create onCallbackSubmit={this.handleCreate} />
 * 
 * The official documentation on {@link https://reactjs.org/docs/forms.html|React Forms} 
 */
function Create(props){

    function handleFormSubmit(e){ 
        e.preventDefault();

        props.onCallbackSubmit({ //2. Unpack the callback from parent
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

    return(
        <React.Fragment>
            <h3>Create New Items</h3>
            <form onSubmit={handleFormSubmit}> {/*1. onSubmit we call our local form submission handler*/}
            <label>Image</label>
            <div>
                <input
                    type='text'
                    name='thumbnail'
                    placeholder='Thumbnail location (url or file path)'
                    size='55'
                    
                />
            </div>
            <label>Category</label>
            <div>
                <input
                    type='text'
                    name='category'
                    placeholder='product category (e.g., fruits)'
    
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
                    cols='40'
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
                    min='0.25'
                    step='0.01'
                    size='5'
                    required 
                />
            </div>
            <label>Quantity Available*</label>
            <div>    
                <input
                    type='number'
                    name='quantity_available'
                    placeholder='3'
                    size='4'
                    required
                /> 
            </div>
            <label>Quantity Units*</label>
            <div>
                <select id="" name="units" required>
                    <option value defaultValue disabled>--Quantity Units--</option>
                    <option value="lb">lbs</option>
                    <option value="oz">oz</option>
                    <option value="each">units</option>                        
                </select>                                   
            </div>    
                <button id="add=new-detail" type="submit" className="btn btn-primary btn-sm">Create</button>
            </form>
        </React.Fragment>

    )

}

export default Create;