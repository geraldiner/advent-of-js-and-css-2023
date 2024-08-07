import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import Hero from '../../components/Hero';
import EmailInput from '../../components/inputs/EmailInput';
import PasswordInput from '../../components/inputs/PasswordInput';
import Layout from '../../layouts/Layout';
import {login} from '../../slices/auth.slice';
import {setCookie} from '../../utils/cookies';
import {API_BASE_URL} from '../../variables/environment';

function SignupPage() {
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${API_BASE_URL}/signup`, {
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

	const disableSubmit = !email || !password || !confirmPassword;

	return (
		<Layout title="Sign Up">
			<Hero>
				<h1>Sign Up</h1>
				<form onSubmit={(e) => handleSubmit(e)}>
					{' '}
					<EmailInput id="email" value={email} setEmail={setEmail} />
					<PasswordInput id="password" value={password} setPassword={setPassword} />
					<PasswordInput
						id="confirm-password"
						value={confirmPassword}
						setPassword={setConfirmPassword}
					/>
					<button
						className="button"
						type="submit"
						disabled={disableSubmit}
						onClick={(e) => handleSubmit(e)}>
						Sign Up
					</button>
				</form>
				<p className="redirect-links">
					<Link to="/login">Already have an account?</Link>
				</p>
			</Hero>
		</Layout>
	);
}

export default SignupPage;
