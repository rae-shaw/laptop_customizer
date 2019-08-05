import React from 'react';
import InvoiceList from './InvoiceList/InvoiceList.js';

export default class Invoice extends React.Component {
	render(){
	   <div className="summary__total">
            <InvoiceList />
	        <div className="summary__total__label">
	        	Your Price: 
	       	</div>
	        	<div className="summary__total__value">
	            	<TotalPrice />
	       	</div>
        </div>
	    


	}
}

