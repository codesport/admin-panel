//import React from 'react';

function checkImagePath(path){

    if ( path.indexOf('https') === -1){

        return require('../'+ path)

    } else {

        return path
    }


}

export {checkImagePath}