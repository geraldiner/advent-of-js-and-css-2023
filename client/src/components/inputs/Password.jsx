import React, {useState} from 'react';

import Icon from '../Icon';

function Password({id, value, setPassword}) {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	return (
		<div className="formInput password-input">
			<span className="sr-only">Password:</span>
			<input
				id={id}
				className={value.length ? 'mini' : ''}
				type={showPassword ? 'text' : 'password'}
				value={value}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="button" className="icon-button" onClick={togglePasswordVisibility}>
				<Icon
					extraClassNames="visibility-icon clickable"
					id={showPassword ? 'eyeClosed' : 'eyeOpened'}
					size={32}
				/>
			</button>
			<label className={value.length ? 'mini' : ''} htmlFor="password">
				Password
			</label>
		</div>
	);
}

export default Password;
