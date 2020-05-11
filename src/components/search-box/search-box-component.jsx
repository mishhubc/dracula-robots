import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
	return (
		<div className='ui search app_ui'>
			<div className='ui icon input'>
				<input
					className='ui input focus'
					type='search'
					placeholder={placeholder}
					onChange={handleChange}
				/>
				<i className='search icon'></i>
			</div>
			<div className='results'></div>
		</div>
	);
};
