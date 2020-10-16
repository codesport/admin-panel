import React from 'react';
import {masterList, Master} from './Master';
import Detail from './Detail';
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
        console.log('handleSelectedDetail called')
        console.log(id)
    }


    handleSelectedDetail_v2 = (id) => {
        const selectedDetail = masterList.filter( detail => detail.id === id )[0];
        console.log(selectedDetail)
        this.setState(
            {selectedDetail_v2: selectedDetail}, 
            function () {
            console.log(this.state.selectedDetail_v2)
            }
        )
        console.log('handleSelectedDetail_V2 called')
        console.log(id)
        //console.log(this.state.selectedDetail_v2 + ' called')
      }
    
    render(){

        let view = null, view_v2 = null

        //view =  !this.selectedDetail  && this.handleClick
        if (this.selectedDetail == null){
            //view = <Master onClick = {(id)=> this.handleSelectedDetail(id)} /> //anon arrow function w/no parameters
            view_v2 = <Master onClick={this.handleSelectedDetail_v2} />;
        } else {
            //view = <Detail selectedDetail={masterList.filter( (detail) => detail.id === this.state.selectedDetail)[0] } /> 
            console.log('Detail clicked')
           view_v2 = <Detail selectedDetail = {this.state.selectedDetail} />
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