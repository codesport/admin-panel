import React from 'react';
//import DetailSummary from './Detail';
import PropTypes from 'prop-types';


Master.propTypes = {
    //masterList: PropTypes.array,
    onClick: PropTypes.func
};

//export const 

function Master(props){

    //inline styles using CSS objects
    const detailSummaryCSS = {
        width: '5%',
        align: 'middle',
        margin: '2em',
    }

    const pointerCSS = {

        cursor: 'pointer'
    }
  
    //https://stackoverflow.com/questions/52512701/change-inline-color-on-mouseover-react
  //https://codesandbox.io/s/mouseover-and-randomize-text-color-forked-qei73
  const onMouseOver = event => {
        const el = event.target;
        el.style.backgroundColor = "skyblue";
      };
      
      const onMouseOut = event => {
        const el = event.target;
        el.style.backgroundColor = "White";
      };   

    
    //console.log (props.onChange)
    return(
        <React.Fragment>
            {props.masterList.map( (singleItem, index) => 
            <div key={singleItem.id}  onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)} >
                <span  onClick={() => props.onClick(singleItem.id)} style={pointerCSS}>
                    <img style={detailSummaryCSS} align="middle" className="spacer" src={require('../'+ singleItem.thumbnail)} alt={singleItem.name} />
                    <span className="spacer">{singleItem.name}&nbsp;&nbsp;&nbsp;</span>
                    <span className="spacer">${singleItem.price}/{singleItem.units}&nbsp;&nbsp;&nbsp;</span>
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
