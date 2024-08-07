import React from 'react';

function Email({id, value, setEmail}) {
	return (
		<div className="formInput">
			<span className="sr-only">Email</span>
			<input
				className={value.length ? 'mini' : ''}
				id={id}
				type="email"
				value={value}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label className={value.length ? 'mini' : ''} htmlFor="email">
				Email
			</label>
		</div>
	);
}

export default Email;
