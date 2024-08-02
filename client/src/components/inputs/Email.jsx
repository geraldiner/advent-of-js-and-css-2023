import PropTypes from 'prop-types';
import React from 'react';

function Email({id, value, setEmail}) {
	return (
		<label className="formInput" htmlFor="email">
			<span className="sr-only">Email:</span>
			<input
				id={id}
				type="email"
				value={value}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
			/>
		</label>
	);
}

export default Email;
