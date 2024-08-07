import React from 'react';

function EmailInput({id, value, setEmail}) {
	return (
		<div className="formInput">
			<span className="sr-only">Email</span>
			<input
				className={value.length ? 'minimize' : ''}
				id={id}
				type="email"
				value={value}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label className={value.length ? 'minimize' : ''} htmlFor="email">
				Email
			</label>
		</div>
	);
}

export default EmailInput;
