import React from 'react';
import {masterList, Master} from './Master';
import Header from './Header';


//
function Controller(){
    return(
        <React.Fragment>
            <Header masterList = {masterList} />
            <hr />
            <Master />
        </React.Fragment>

    )   

}

export default Controller;