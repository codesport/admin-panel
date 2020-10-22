//import React from 'react';

function checkImagePath(path){

    if ( path.indexOf('https') === -1 ){

        return require('../'+ path)

    } else {

        return path
    }

}

function formatBundleTotalInventoryDisplay(units){
/*

    switch (units) {
        case 'each':
            return bundles
            break;
        
        case 'lbs':
            return 'lb'
            break;    
    
        default:
            return units
            break;
    }
*/

    if ( units.indexOf('each') === -1 ){

        return units

    } else {

        return 'bunches'
    }
}

export {checkImagePath, formatBundleTotalInventoryDisplay}