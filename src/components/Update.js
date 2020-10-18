import React from 'react';
import Form from './Form';


function Update(props){

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
            id: props.uuid
        });
    }


    const detailSummaryPhotoCSS = {
        width: '5%',
        align: 'middle',
        margin: '2em',
    }
//https://reactjs.org/docs/forms.html
    return(//name, quantity, price, and units required
        <React.Fragment>
            <h3>Update Existing Items</h3>
            <form onUpdate={handleFormSubmit}>
            <label>Image</label>
            <div>
                <img style={detailSummaryPhotoCSS} align="middle" className="spacer" src={require('../'+ props.thumbnail)} alt={props.name} />
            </div>
            <div>
                <input
                    type='text'
                    name='thumbnail'
                    placeholder='Thumbnail location (url or file path)'
                    value={props.thumbnail}             
                />
            </div>
            <label>Unique ID</label>
                <div><input disabled type='text' value={props.id} /></div>

            <label>Category</label>
            <div>
                 <input
                    type='text'
                    name='category'
                    placeholder='prouct category (e.g., fruits)'
                    value={props.category}
      
                />
            </div>
            <label>Item Name*</label>
            <div>    
                 <input
                    type='text'
                    name='name'
                    placeholder='(e.g., apples)'
                    value={props.name}
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
                    value={props.description}

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
                    value={props.price}
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
                    value={props.quantity_available}
                /> 
            </div>
            <label>Quantity Units*</label>
            <div>
                <select id="" name="units" required value={props.units}>
                    <option value disabled>--Quantity Units--</option>
                    <option value="lb">lbs</option>
                    <option value="oz">oz</option>
                    <option value="each">units</option>                        
                </select>                                   
            </div>    
                <button id="add=new-detail" type="submit" >Update</button>
            </form>
            
        </React.Fragment>
    )



}

export default Update;