import React from 'react';
import InvoiceList from '../InvoiceList/InvoiceList.js';
import TotalPrice from '../TotalPrice/TotalPrice.js';


export default function Invoice(props) {
	return(
		<section>
		   <div >
		   		<InvoiceList 
		   			selected={props.selected}/>
		    </div>
		    <div className="summary__total__label">
		        	Your Price: 
		    </div>
		    <div className="summary__total__value">
		        	<TotalPrice 
		        	selected={props.selected}/>
		    </div>
		</section>
    
    );
}

