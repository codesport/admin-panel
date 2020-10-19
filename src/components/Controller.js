import React from 'react';
import { Master} from './Master';
import { DetailFull } from './Detail';
import Header from './Header';
import Update from './Update';
import Create from './Create';


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
            masterList: seedList,
            view: <Master masterList={seedList} onClick={this.handleSelectedDetail} onChange={this.buildEditArray}/>,
        }
    }

    emptyArrayToEdit = () =>{
        this.setState({
            arrayToEdit:[]
        })
    }

    renderView = (view) =>{
        this.setState({            
            view: view,
        })
    }


    handleSelectedDetail = (id, selectOrUpdate) => {
    
        if (id){
            console.log('ID of selected detail: ' + id)
            const selectedDetail = this.state.masterList.filter( detail => detail.id === id )[0];
            console.log('Contents of selected detail: '); console.log(selectedDetail)

            this.setState({
                selectedDetail: selectedDetail,
            }, function(){
                //https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
                !selectOrUpdate && this.renderView(<DetailFull selectedDetail = {this.state.selectedDetail} onSelect={this.buildEditArray} />)
                selectOrUpdate && this.renderView( <Update onCallbackSubmit={this.handleUpdate} detail={selectedDetail} />)

            })
        } else{
            this.renderView(
            <React.Fragment>
            <h3>Update Attempt Aborted. Please Select an Item to Update</h3> 
            <Master masterList={this.state.masterList} onClick={this.handleSelectedDetail} onChange={this.buildEditArray}/>
            </React.Fragment> )
        }

    }

    handleUpdate = (updates) =>{
        const updatedDetail = this.state.masterList.filter( detail => detail.id !== updates.id).concat(updates)
        console.log('Contents of Updated Detail:')
        console.log(updatedDetail)
        this.setState({
            masterList: updatedDetail,
            }, function(){
                    this.emptyArrayToEdit()
                    this.renderView( <Master masterList={this.state.masterList} onClick={this.handleSelectedDetail} onChange={this.buildEditArray}/> )
                }
            )
    }

    handleCreate = ( creation ) =>{
        const newMasterList = this.state.masterList.concat( creation )
        
        this.setState({
            masterList: newMasterList,
            }, function(){this.renderView( <Master masterList={this.state.masterList} onClick={this.handleSelectedDetail} onChange={this.buildEditArray}/>)}
        )
    }


    /**
     * Stores UUID of selected items in an array saved to state.arrayToEdit
     * 
     * This function call is embeded in the Master list. It uses querySelectorAll() and Array.from() to find and parse UUIDs that are checked
     * 
     * @tutorial https://stackoverflow.com/a/31113246/946957 and https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/NodeList  
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
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
      
        this.setState({
          masterList: newMasterList,       
        }, function(){
            this.emptyArrayToEdit()
            console.log(this.state.masterList)
            this.renderView( <Master masterList={this.state.masterList} onClick={this.handleSelectedDetail} onChange={this.buildEditArray} />)
        });

    }
     
    handleCreateFormView = () => {
        this.setState({
            view: <Create onCallbackSubmit={this.handleCreate} />
        })
    }

    handleRead = () => {
        console.log('manualy loading data')
        this.emptyArrayToEdit()
        this.renderView( <Master masterList={this.state.masterList} onClick={this.handleSelectedDetail} onChange={this.buildEditArray}/> )       
    }


    
    render(){
        return(
            <React.Fragment>
                <Header masterList = {this.state.masterList} />
                <hr />   

                <button id="update-button" onClick={this.handleCreateFormView}>Create</button>
                <button id="update-button" onClick={this.handleRead}>Read</button>
                <button id="update-button" onClick={()=>this.handleSelectedDetail(this.state.arrayToEdit[0], 'update') }>Update</button>
                <button id="delete-button" onClick={this.handleDelete}>Delete</button>

                {this.state.view}                
            </React.Fragment>   
        )

    }
}


export default Controller;