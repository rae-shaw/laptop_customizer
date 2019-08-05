import React from 'react';


export default function TotalPrice(props){
	const total = Object.keys(this.state.selected)
	     .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);  
	return(
	    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(total) }
    );
}