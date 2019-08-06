import React from 'react';

export default function TotalPrice(props){
	const total = Object.keys(props.selected)
				.reduce((acc, curr) =>acc + props.selected[curr].cost,0);
	return(
		<section>
			{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
			.format(total) }
			
		</section>
	);
}
