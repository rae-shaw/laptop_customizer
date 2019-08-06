import React from 'react';

export default function SpecsListItem(props){
	console.log("key=", props.myKey)
	return(
		props.features.map((item, index) => {
              const selectedClass = item.name === props.selected.name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return(
              	<li 
              	key={index} 
              	className="feature__item">
                	<div 
                		className={featureClass}
                		onClick={() => props.updateFeature(props.myKey, item)}>
                  		{item.name}>
                  		({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      	.format(item.cost) })
		            </div>
              </li>
            );
		})	
    );
}