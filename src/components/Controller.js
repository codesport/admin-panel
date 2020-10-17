import React from 'react';
import {masterList, Master} from './Master';
import { DetailFull } from './Detail';
import Header from './Header';


class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            selectedDetail: null,
            selectedDetail_v2: null,
        }
    }


    handleSelectedDetail(id){
        this.setState({ selectedDetail: id});
    }


    handleSelectedDetail_v2 = (id) => {
        const selectedDetail = masterList.filter( detail => detail.id === id )[0];
        this.setState(
            {selectedDetail_v2: selectedDetail}, 
        )
    }


    buildEditArray(){

        //https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes
        let checkedBoxes = document.querySelectorAll('input[name=update-or-delete]:checked');

        //document.getElementsByClassName('check-box');
        //document.getElementById('demo');
        //document.querySelector('input[name=hey]').value



    }

    
    render(){

        let view = null, view_v2 = null

        //view =  !this.selectedDetail  && this.handleClick
        if (this.state.selectedDetail_v2 == null){
           // view = <Master onClick = {(id)=> this.handleSelectedDetail(id)} /> //anon arrow function w/no parameters
            view_v2 = <Master onClick={this.handleSelectedDetail_v2} />;
        } else {
            //view = <DetailFull selectedDetail={masterList.filter( (detail) => detail.id === this.state.selectedDetail)[0] } /> 
           view_v2 = <DetailFull selectedDetail = {this.state.selectedDetail_v2} />
        }

        return(
            <React.Fragment>
                <Header masterList = {masterList} />
                <hr />   
                <h2>Version 1</h2>

                {/*view*/}
                {/*this.state.selectedDetail*/}
                <h2>Version 2</h2>
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