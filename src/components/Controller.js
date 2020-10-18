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




    handleSelectedDetail = (id) => {
        const selectedDetail = this.state.masterList.filter( detail => detail.id === id )[0];
        
        this.setState({
            selectedDetail: selectedDetail,
        
        }, function(){console.log(this.state.selectedDetail)})

        this.setState({            
            view: <DetailFull selectedDetail = {this.state.selectedDetail} onSelect={this.buildEditArray} />,
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


    handleCreate = ( creation ) =>{

        const newMasterList = this.state.masterList.concat( creation )
        
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

        
    showCreateForm = () => {

        this.setState({
            view: <Create onSubmit={this.handleCreate} />
        })
    }

    handleRead = () => {
        console.log('manualy loading data')
        this.setState({
            view: <Master masterList={this.state.masterList} onClick={this.handleSelectedDetail} onChange={this.buildEditArray} />
        })
        
    }

    showUpdateForm = () => {

        this.setState({
            view: <Update onSubmit={this.handleUpdate} detail={this.state.arrayToEdit[0]} />
        })

    }
    
    render(){

        return(
            <React.Fragment>
                <Header masterList = {this.state.masterList} />
                <hr />   

                <button id="update-button" onClick={this.showCreate}>Create</button>
                <button id="update-button" onClick={this.handleRead}>Read</button>
                <button id="update-button" onClick={this.showUpdateForm}>Update</button>
                <button id="delete-button" onClick={this.handleDelete}>Delete</button>

                {this.state.view}
                
            </React.Fragment>   
        )

    }
}


export default Controller;