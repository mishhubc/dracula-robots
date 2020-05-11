import React from 'react';
import './card.styles.css';

export const Card = (props) => (
	<div className='card-container'>
		<img
			alt='monster'
			src={`https://robohash.org/${props.monster.id}&160x160`}
		/>
		<h2>{props.monster.name}</h2>
		<h3>{props.monster.email}</h3>
	</div>
);
