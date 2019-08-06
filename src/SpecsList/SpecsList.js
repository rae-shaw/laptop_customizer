import React from 'react';
import SpecsListItem from '../SpecsListItem/SpecsListItem.js';

export default function SpecsList(props){
	return(
		<section>
			<h3>TECH SPECS AND CUSTOMIZATIONS</h3>
			{Object.keys(props.features).map(key => {
			 	return(<div className="feature" key={key}>
			          		<div className="feature__name">{key}</div>
			          		<ul className="feature__list">
			            		<SpecsListItem
			            		myKey={key}
			            		features={props.features[key]}
			            		selected={props.selected[key]} 
			            		updateFeature={props.updateFeature}
			            		/>
			          		</ul>
			        	</div>
			   	);	
			})}
		</section>
	);
}
