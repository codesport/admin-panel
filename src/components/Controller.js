import React from 'react';
import { Master } from './Master';
import Detail from './Detail';
import dataFile from './dataFile'
import Header from './Header';

/**
 * @summary Stage 2: Adding state
 * 
 * Constructors are standard within OO and are used to initialize properties as well as run any methods
 * upon object instantiation.  
 * 
 * "props" refers to properties and are what variables are called in OO programming. The use of props 
 * and super(props) keywords are how constructors are defined Javascript ES6.
 * 
 * If our class component will use state, state key-value pairs must be initialized in the constructor via
 * `this.state ={ key: value }`
 */
class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            selectedDetail: null,
        }
    }

    /**
     * @summary Function to be sent to the Master component as a callback
     * 
     * Uses the built-in JavaScript filter method to find list item clicked based on id provided 
     * by callback. 
     * 
     * NB: Array.filter() returns an array with elements that satisfy the test criteria. 
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
    handleSelectedDetail = (id) => {
        const selectedDetail = dataFile.filter( detail => detail.id === id )[0];

        console.log(dataFile.filter( detail => detail.id === id ) )
        this.setState(
            {selectedDetail: selectedDetail}, 
        )
    }

    /**
     * @summary All React class components must have a render method. render() returns JSX which 
     *          produces a view for the virtual DOM
     * 
     *  NB: The handleSelectDetail method is sent to Master as a callback function. It is 
     *      being stored in an arbitrary prop called "propertyFromController".
     *      
     *      In Master.js the callback shall be activated via an "OnClick" event handler. In plain
     *       English, this means when list item is clicked, the handleSelectDetail will be called
     * 
     * The Master component further "explodes" the callback by embedding the list items' IDs
     * as arguments to the handleSelectedDetail methods
     * 
     * NB: This is JSX: <ComponentName  propName = {value} />
     * 
     *     1. As such, the below JS assigns the output of Master and Detail to a variable called view
     *     2. The variable called "view" is then "returned" as output for eventual rendering to the DOM
     *     3. Observe that raw JavaScript must be encased in {} when using JSX
     */
    render(){
        let view = null

        if (this.state.selectedDetail == null){
            view = <Master propertyFromController = {this.handleSelectedDetail} />;
        } else {
           view = <Detail selectedDetail = {this.state.selectedDetail} />
        }

        return(
            <React.Fragment>
                <Header masterList = {dataFile} />
                <hr />   
                {view}
            </React.Fragment>
        )
    }
}

export default Controller;