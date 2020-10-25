import React from 'react';
import { Master} from './Master';
import { Detail } from './Detail';
import Header from './Header';
import Update from './Update';
import Create from './Create';
import UpdateHeader from './UpdateHeader';


let seedList = [

    {
        id: '1fgh',        
        category: 'Fruits',
        description: 'Organic black grapes from our estate. Sold by the pound', 
        name: 'Organic Black Grapes',
        price: 2.99,
        quantity_available: 100,
        thumbnail: 'images/black-grapes.jpg',
        units: 'lb'
    },

    {
        id: '2cde',        
        category: 'Fruits',
        description: 'Organic red plumbs from our local farm. Sold by the pound',
        name: 'Organic Plums',
        price: 3.99,
        quantity_available: 50,
        thumbnail: 'images/red-plum.jpg',
        units: 'lb'
    },

    {
        id: '3abc',        
        category: 'Vegetables',
        description: ' Organic dino kale. Fresh from our farm. Sold by the bunch',
        name: 'Organic Dino Kale',
        price: 0.79,
        quantity_available: 10,
        thumbnail: 'images/dino-kale.jpg',
        units: 'each'
    },

]


class Controller extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            selectedDetail: null,
            arrayToEdit:[],
            appHeader:'Arroyo Family Farms Inventory App',
            masterList: seedList,
            view: <React.Fragment><h3>Welcome! App has been Seeded with Sample Inventory Data</h3><Master masterList={seedList} onClick={this.handleSelectedDetail} onChange={this.buildEditArray}/></React.Fragment>,
            headerView: <Header masterList={seedList} header='Double Click/Tap to Update Title' onDoubleClick={this.handleShowHeaderUpdateForm} />,
        }
    }

// --- housekeeping methods
    
    emptyArrayToEdit = () =>{
        this.setState({
            arrayToEdit:[]
        })
    }

    /**
     * Simplifies rendering of the page view stored in state
     * 
     * @param {HTMLHeaderElement} message  - HTML header element and text
     * @param {string} view - Child component render with props
     */
    renderView = ( message, view = <Master masterList={this.state.masterList} onClick={this.handleSelectedDetail} onChange={this.buildEditArray}/> ) =>{

        view = <React.Fragment>{message}{view}</React.Fragment>

        this.setState({            
            view: view,
        })

        this.showButton('create-button')
        this.showButton('update-button')
        this.showButton('delete-button')

    }


    /**
     * Helper function to update Header title and inventory count
     * 
     * this.state.headerView is called for Create, Delete, and Header Update - 3 times.
     * 
     * @param {string} componentName - name of the component to render in 
     * @param {string} event - (optional) unused for now. To be expanded upon after code refactoring
     * 
     * Using spread operator to pass and deconstruct props:
     *  {@link https://stackoverflow.com/questions/28452358/what-is-the-meaning-of-this-props-in-reactjs|Props and Spread Operator}
     * 
     * Sending component names as parameters to functions: 
     *  {@link https://www.google.com/search?q=send+a+component+name+as+a+variable+in+react|Google Search}
     *
     * Stackoverflow on sending Components as parameters to functions: 
     *  {@link https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name| Authoritative Solution}
     *  {@link https://stackoverflow.com/a/38823404| Dynamic Loading for index.js}
     *  {@link https://stackoverflow.com/questions/28842459/react-jsx-dynamic-component-names| Other Solution on stackoverflow}
     * 
     */
    renderHeaderView = ( componentName, event ) =>{

        let headerView = null

        console.log('Rendering component "'+ componentName + '" in header')

        if( componentName === 'Header'){

            headerView = <Header masterList={this.state.masterList} header={this.state.appHeader} onDoubleClick={this.handleShowHeaderUpdateForm} />

        } else {

            headerView  = <UpdateHeader masterList={this.state.masterList} header={this.state.appHeader} onCallbackSubmit={this.updateHeader} />

        }

        this.setState({
            headerView: headerView
        })

    }

    //https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
    hideButton = (id) =>{
        const button = document.getElementById(id)
        if ( button.style.display === 'inline' ){
            button.style.display = 'none';
        }
    }
    showButton = (id) =>{
        const button = document.getElementById(id)
        if ( button.style.display === 'none' ){
            button.style.display = 'inline';
        }
    } 
 // ---   

    handleSelectedDetail = (id, selectOrUpdate) => {
/*
        !this.state.arrayToEdit && this.setState({arrayToEdit: id })
        this.state.arrayToEdit && (id = this.state.arrayToEdit)
*/

        if (id.length && this.state.arrayToEdit.length === 0){ 
            //Normal Usage: item selected for update from detail page

            this.setState({
                arrayToEdit: id.split(',')
            })

            console.log('TEST 1 ID of selected detail: ' + id)

        } else if (id.length && !Array.isArray(id) && Array.isArray(this.state.arrayToEdit) ) { 
            //Edge Case Fix: multiple items selected from master && click 1 item in master to detail page

            this.setState({
                arrayToEdit: id.split(',')
            })

            console.log('TEST 2 ID of selected detail: ' + id)
        
        } else if ( Array.isArray(id) || !id ) { 
            //Edge Case Fix: choose the first item selected from master page || no ID Selected

                console.log('TEST 4 ID of selected detail: ' + id)

                id = id[0]

                console.log('After assigning id = id[0]: TEST 3 ID of selected detail: ' + id)
        }
    
        if (id){
            console.log('ID of selected detail: ' + id)
            const selectedDetail = this.state.masterList.filter( detail => detail.id === id )[0];
            console.log('Contents of selected detail: '); console.log(selectedDetail)

            this.setState({
                selectedDetail: selectedDetail,
            }, function(){ //https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
                    if( !selectOrUpdate ){
                   
                        this.renderView('', <Detail selectedDetail = {this.state.selectedDetail} />)

                    }else {

                        this.renderView('', <Update onCallbackSubmit={this.handleUpdate} detail={selectedDetail} />)
                        this.hideButton('update-button')

                    }
            })

        } else {

            this.renderView( <h3>Update Attempt Aborted. Please Select an Item to Update</h3>  )
            
        }

    }

    /**
     * @summary Function to be sent to the Master component as a callback
     * 
     * Uses the built-in JavaScript filter method to first remove the previous version of the 
     * updated item, and than concatenates the new version. Manipulation is done on a copy
     * 
     * NB: Array.filter() returns an array with elements that satisfy the test criteria. Because 
     *     our array is in fact a JSON object, we explicity extract the object by identifying 
     *     its position with "[0]"
     * 
     * Here is how the filter method is used: 
     * array.filter( arbitrary_variable_name_for_single_array_item_to_test =>  
     *               test_expression_on_variable_name_for_single_array_item_to_test )
     *         
     * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter|Filter}
     * for more information
     * 
     * @param { string, number} id 
     */

    handleUpdate = (updates) =>{
        const updatedDetail = this.state.masterList.filter( detail => detail.id !== updates.id).concat(updates)
        console.log('Contents of Updated Detail:')
        console.log(updatedDetail)
        this.setState({
            masterList: updatedDetail,
            }, function(){
                    this.emptyArrayToEdit()
                    this.renderView( 
                            <h3>Successfully Updated {updates.name}!</h3> 
                    )
                }
            )
    }

    handleCreate = ( creation ) =>{
        const newMasterList = this.state.masterList.concat( creation )
        
        this.setState({
            masterList: newMasterList,
            }, function(){this.renderView( <h3>Successfully Created {creation.name}!</h3> )}
        )

    }


    /**
     * Utility Function: Allows actions (e.g., delete) on multiple items at once based on checkboxes selected
     * 
     * This function call is embedded in the Master list. It uses querySelectorAll() and Array.from()
     * to find and parse UUIDs items that are checked. Stores UUID of selected items in an array
     * saved to state.arrayToEdit
     * 
     * Resources used to research and build this functionality:
     * 
     * {@link https://stackoverflow.com/a/31113246/946957|Stackoverflow} 
     * {@link https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes|Selecting All Check Boxes}
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll|QuerySelectAll}
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/NodeList|NodeList}  
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from|Arrayfrom}
     * 
     * Examples of how to select elements with JavaScript
     * 
     *  document.getElementsByClassName('check-box');
     *  document.getElementById('demo');
     *  document.querySelector('input[name=hey]').value
     * 
     */
    buildEditArray = ()=>{

        let checkedBoxes = document.querySelectorAll('input[name=update-or-delete]:checked');
        checkedBoxes = Array.from(checkedBoxes)

        let newArrayToEdit=[]        
        
        checkedBoxes.map( (selected, index)  => 
            newArrayToEdit[index] = selected.value
        )

       // const newArrayToEdit = this.state.arrayToEdit.concat(id)
        this.setState({
            arrayToEdit: newArrayToEdit, 
        }, function(){console.log(this.state.arrayToEdit)})

    }


    handleDelete = () => {
        
        console.log('Delete function called')

        if(this.state.arrayToEdit.length > 0){ 
               
            const confirmDelete = window.confirm('Are you sure you want to delete these ' + this.state.arrayToEdit.length + ' items?')
            
            if (confirmDelete === true) {

                let newMasterList = this.state.masterList 
                this.state.arrayToEdit.map( ( id, index) =>     
                    newMasterList = newMasterList.filter( detail => detail.id !== id)    
                )

                console.log(newMasterList)
            
                this.setState({

                    masterList: newMasterList, 

                }, function(){
                    this.emptyArrayToEdit()
                    console.log(this.state.masterList)
 
                    this.renderHeaderView('Header', 'onDoubleClick' )
                    
                    this.renderView( 
                        <h3>Success! { this.state.arrayToEdit.length } Item(s) Deleted</h3>  
                    )
                
                })

            }  else {
                this.emptyArrayToEdit()
                this.renderView(
                    <h3>Delete Process Canceled By User.</h3> 
                     )
                    
            } 
            
        } else {

            this.renderView(
                <h3>Delete Attempt Aborted. Please Select an Item to Delete.</h3> 
                )
                
        }    
 

    }
     
    handleCreateFormView = () => {
        this.renderView('', <Create onCallbackSubmit={this.handleCreate} />) 
        this.hideButton('create-button')
        this.hideButton('update-button')
        this.hideButton('delete-button')
    }

    handleRead = () => {
        console.log('manually loading data')
        this.emptyArrayToEdit()
        this.renderView( '' ) 
    }

    handleShowHeaderUpdateForm = () =>{

        console.log('Loading header update form')
        
        this.renderHeaderView( 'UpdateHeader', 'onCallbackSubmit' )

    }
    
    updateHeader = (newText) =>{

        console.log('Loading New Header')
        console.log(newText.header)

        this.setState({
            appHeader: newText.header,

        }, function(){   
                this.renderHeaderView( 'Header',  'onDoubleClick' )
            }
        )

    }
    
    render(){
        return(
            <React.Fragment>
                {this.state.headerView}
                <hr />   

                <button onClick={this.handleCreateFormView} id="create-button" style={{display:'inline'}} className="btn btn-primary btn-sm">Add (create)</button>
                <button onClick={this.handleRead} id="read-button" style={{display:'inline'}} className="btn btn-success btn-sm">Refresh (read)</button>
                <button onClick={()=>this.handleSelectedDetail(this.state.arrayToEdit, 'update')} id="update-button" style={{display:'inline'}} className="btn btn-warning btn-sm">Edit (update)</button>
                <button onClick={this.handleDelete} id="delete-button" style={{display:'inline'}} className="btn btn-danger btn-sm">Delete</button>

                <hr />

                {this.state.view}                
            </React.Fragment>   
        )

    }
}

export default Controller;