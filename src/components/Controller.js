import React from 'react';
import {masterList, Master} from './Master';
import Detail from './Detail';
import Header from './Header';


class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            selectedDetail: null,
        }
    }


    handleSelectedDetail(id){
        this.setState({ selectedDetail: id});
        console.log('Detail clicked')


    }

    
    render(){

        let view = null

        //view =  !this.selectedDetail  && this.handleClick
        if (this.selectedDetail == null){
            view = <Master onClick = {this.handleSelectedDetail} />
        } else {
            view = <Detail selectedDetail={this.state.Detail.filter((detail) => detail.id === this.state.selectedDetail)[0]} /> 
            console.log('Detail clicked')
        }

        return(
            <React.Fragment>
                <Header masterList = {masterList} />
                <hr />   
                {view}
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