//import React from 'react';

function checkImagePath(path){

    if ( path.indexOf('https') === -1 ){

        return require('../'+ path)

    } else {

        return path
    }

}

function formatBundleTotalInventoryDsiplay(units){

    if ( units.indexOf('each') === -1 ){

        return units

    } else {

        return 'bundles'
    }

}

export {checkImagePath, formatBundleTotalInventoryDsiplay}