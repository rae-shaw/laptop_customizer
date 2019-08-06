import React from 'react';

export default function InvoiceList(props){
	return(
		<section>
			{Object.keys(props.selected).map(key => {
				return(
		          	<div className="summary__option" key={key}>
		        		<div className="summary__option__label">{key}  </div>
		            	<div className="summary__option__value">{props.selected[key].name}</div>
		            	<div className="summary__option__cost">
			              	({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
			                  .format(props.selected[key].cost) })
		            	</div>
		        	</div>
		        );
		    })}
     	</section>
	);		
}

