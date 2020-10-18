import React from 'react';
import { Master} from './Master';
import { DetailFull } from './Detail';
import Header from './Header';

let LIST = [

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
            selectedDetail_v2: null,
            arrayToEdit:[],
            masterList: LIST
        }
    }


    handleSelectedDetail(id){
        this.setState({ selectedDetail: id});
    }


    handleSelectedDetail_v2 = (id) => {
        const selectedDetail = this.state.masterList.filter( detail => detail.id === id )[0];
        this.setState({
            selectedDetail_v2: selectedDetail,
        
        })
    }

    handleUpdate = (updates) =>{
        const updatedDetail = this.state.masterList.filter( detail => detail.id !== updates.id).concat(updates)
        this.setState({
            masterList: updatedDetail,

        })
    }

    handleUpdatePrepocessor = (id) =>{



    }


    handleCreate = (newDetail) =>{

        const newMasterList = this.state.masterList.concat(newDetail)
        
        this.setState({
            masterList: newMasterList,

        })



    }


    buildEditArray = (id)=>{

        //https://stackoverflow.com/a/31113246/946957
        //https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
        let checkedBoxes = document.querySelectorAll('input[name=update-or-delete]:checked');
        //https://developer.mozilla.org/en-US/docs/Web/API/NodeList  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        checkedBoxes = Array.from(checkedBoxes)

        let newArrayToEdit=[]        
        checkedBoxes.map( (selected, index)  => 

            newArrayToEdit[index] = selected.value

        )

       // const newArrayToEdit = this.state.arrayToEdit.concat(id)
        this.setState({
            arrayToEdit: newArrayToEdit, 
        }, function(){console.log(this.state.arrayToEdit)})
        

        //document.getElementsByClassName('check-box');
        //document.getElementById('demo');
        //document.querySelector('input[name=hey]').value

    }





    handleDelete = () => {

        console.log('Delete function called')
        console.log(this.state.arrayToEdit)
        let newMasterList 
        this.state.arrayToEdit.map( ( id, index) =>
        
            newMasterList = this.state.masterList.filter( detail => detail.id !== id)    
        
        )
        console.log(newMasterList)
        console.log(this.state.masterList)
       // this.buildEditArray()
 /*       //console.log(this.state.arrayToEdit)

        const newMasterList = this.state.masterList.filter( detail => detail.id !== id);
        //console.log(newMasterList)

        //masterList = newMasterList

        //console.log( masterList)
*/      
        this.setState({
          masterList: newMasterList,
          
        }, function(){console.log(this.state.masterList)});

    }

    


    
    render(){

        let view = null, view_v2 = null

        //view =  !this.selectedDetail  && this.handleClick
        if (this.state.selectedDetail_v2 == null){
           // view = <Master onClick = {(id)=> this.handleSelectedDetail(id)} /> //anon arrow function w/no parameters

           //library of JS events: https://www.tutorialspoint.com/javascript/javascript_events.htm
            view_v2 = <Master masterList={this.state.masterList} onClick={this.handleSelectedDetail_v2} onChange={this.buildEditArray}/>;
        } else {
            //view = <DetailFull selectedDetail={masterList.filter( (detail) => detail.id === this.state.selectedDetail)[0] } /> 
           view_v2 = <DetailFull selectedDetail = {this.state.selectedDetail_v2} />
        }

        return(
            <React.Fragment>
                <Header masterList = {this.state.masterList} />
                <hr />   
                <h2>Version 1</h2>

                {/*view*/}
                {/*this.state.selectedDetail*/}
                <h2>Version 2</h2>
                <button id="update-button" onClick={this.handleUpdate}>Update</button>
                <button id="delete-button" onClick={this.handleDelete}>Delete</button>

                {view_v2}
                {/*this.state.selectedDetail*/}
            </React.Fragment>
            
        )



    }




}


/*

function Controller(){
    return(
        <React.Fragment>
            <Header masterList = {masterList} />
            <hr />
            <Master />
        </React.Fragment>

    )   
}
*/

export default Controller;