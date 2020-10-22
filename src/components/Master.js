import React from 'react';
import { checkImagePath } from './ReusableHousekeepingFunctions';
import PropTypes from 'prop-types';


Master.propTypes = {
    masterList: PropTypes.array,
    onClick: PropTypes.func,
    description: PropTypes.string,
    price: PropTypes.number, 
    quantity: PropTypes.number,    
};



//export const 

function Master(props){

    //inline styles using CSS objects
    const detailSummaryPhotoCSS = {
        
        align: 'middle',
        verticalAlign: 'middle',
        margin: '2em',
        maxWidth: '20%',
        height: 'auto',

    }

    const pointerCSS = {

        cursor: 'pointer'
    }
  
/**
 * Use onMouseEnter to change element's color:
 *  
 * @tutorial https://stackoverflow.com/questions/52512701/change-inline-color-on-mouseover-react
 * @tutorial https://codesandbox.io/s/mouseover-and-randomize-text-color-forked-qei73
 * @tutorial useState: https://dev.to/hunterbecton/react-tutorial-change-state-with-react-hooks-and-mouse-events-1g3m
 * 
 * onMouseOver triggers on element's children. OnMouseEnter only triggers on parent element 
 * @tutorial https://linguinecode.com/post/how-to-add-onmouseenter-or-onmouseover-in-reactjs
 */

    const enter = (event) => {
        event.target.style.backgroundColor = "skyblue";
        //console.log('on mouse enter activated')
    };
      
      const exit = event => {
        event.target.style.backgroundColor = "white";
        //console.log('On mouse out activated')
      };   
/*
      const setStyle = (background, font) => {
        setBackground(background);
        setFont(font);
      };
     onMouseEnter={() => setStyle("#424246", "#fdfdfd")}
      onMouseOut={() => setStyle("#fdfdfd", "#424246")}

 */  

    //console.log (props.onChange)
    return(
        <React.Fragment>
            {props.masterList.map( (singleItem, index) => 
            <div key={singleItem.id}  onMouseOver={event => enter(event)} onMouseOut={event => exit(event)} >
            {/*must use arrow functions when sending arguments to a function */}
                <span onClick={() => props.onClick(singleItem.id)} style={pointerCSS}>

                    <img style={detailSummaryPhotoCSS} align="middle" className="spacer" src={ checkImagePath( singleItem.thumbnail ) } alt={singleItem.name} />
                    {singleItem.name}&nbsp;&nbsp;&nbsp;   ${singleItem.price}/{singleItem.units}&nbsp;&nbsp;&nbsp;

                </span>
                <input className="spacer check-box" type="checkbox" name="update-or-delete" value={singleItem.id} onClick={() => props.onChange(singleItem.id)} />
                <hr />
            </div>
            )}
        </React.Fragment>


    )


}

/*
function Master_Version2(){
    return(
        <React.Fragment>
            {masterList.map( (singleItem, index ) =>
                <DetailSummary
                    onClick = {singleItem.onClick}
                    thumbnail={singleItem.thumbnail}
                    category={singleItem.category}
                    description = {singleItem.description}
                    price = {singleItem.price}
                    quantity = {singleItem.quantity}
                    units = {singleItem.units}
                    name={singleItem.name}
                    key= {singleItem.id} //if data does not have a unique id, use index      
                />
            )}
        </React.Fragment>
    )
}
*/




export {Master};
