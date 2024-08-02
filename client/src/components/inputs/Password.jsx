import PropTypes from 'prop-types';
import React, {useState} from 'react';

import {formatTitleCase} from '../../utils/formatting';
import Icon from '../Icon';

function Password({id, value, setPassword}) {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	return (
		<label className="formInput password-input" htmlFor="password">
			<span className="sr-only">Password:</span>
			<input
				id={id}
				className="password-input"
				type={showPassword ? 'text' : 'password'}
				value={value}
				onChange={(e) => setPassword(e.target.value)}
				placeholder={formatTitleCase(id)}
			/>
			<button type="button" className="visibility-icon-button" onClick={togglePasswordVisibility}>
				<Icon
					extraClassNames="visibility-icon clickable"
					id={showPassword ? 'eyeClosed' : 'eyeOpened'}
					size={32}
				/>
			</button>
		</label>
	);
}

export default Password;
