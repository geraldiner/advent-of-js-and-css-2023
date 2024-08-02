import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import Layout from '../../layouts/Layout';
import {login} from '../../slices/auth.slice';
import {setCookie} from '../../utils/cookies';
import {API_BASE_URL} from '../../variables/environment';

function SignupPage() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {currentUser} = useSelector((state) => state.user);

	useEffect(() => {
		if (currentUser) {
			navigate('/a/dashboard');
		}
	}, [navigate, currentUser]);

	const handleInputChange = (e) => {
		const {id, value} = e.target;
		if (id === 'fullName') {
			setFullName(value);
		} else if (id === 'email') {
			setEmail(value);
		} else if (id === 'password') {
			setPassword(value);
		} else {
			setConfirmPassword(value);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${API_BASE_URL}/signup`, {
				fullName,
				email,
				password,
			});
			const data = await response.data;
			if (data.success) {
				const {user, token} = data;
				dispatch(
					login({
						name: user.name,
						email: user.email,
					})
				);
				setCookie('jwt', token, 7);
				navigate('/a/dashboard');
			}
		} catch (error) {
			console.error(error.response.data.message);
		}
	};

	const disableSubmit = !fullName || !email || !password || !confirmPassword;

	return (
		<Layout title="Sign Up">
			<section id="signup">
				<div className="hero-background" />
				<div className="signup-form">
					<h1>Sign Up</h1>
					<form>
						<label htmlFor="fullName">
							Full Name
							<input
								id="fullName"
								type="text"
								value={fullName}
								onChange={(e) => handleInputChange(e)}
							/>
						</label>
						<label htmlFor="email">
							Email:
							<input id="email" type="email" value={email} onChange={(e) => handleInputChange(e)} />
						</label>
						<label htmlFor="password">
							Password:
							<input
								id="password"
								type="password"
								value={password}
								onChange={(e) => handleInputChange(e)}
							/>
						</label>
						<label htmlFor="confirmPassword">
							Confirm Password:
							<input
								id="confirmPassword"
								type="password"
								value={confirmPassword}
								onChange={(e) => handleInputChange(e)}
							/>
						</label>
						<button type="submit" disabled={disableSubmit} onClick={(e) => handleSubmit(e)}>
							Sign Up
						</button>
					</form>
					<Link to="/login">Already have an account?</Link>
					<Link to="/">Back to home</Link>
				</div>
			</section>
		</Layout>
	);
}

export default SignupPage;
