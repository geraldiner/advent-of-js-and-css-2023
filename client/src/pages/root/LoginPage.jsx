import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import Hero from '../../components/Hero';
import Email from '../../components/inputs/Email';
import Password from '../../components/inputs/Password';
import Layout from '../../layouts/Layout';
import {login} from '../../slices/auth.slice';
import {setCookie} from '../../utils/cookies';
import {API_BASE_URL} from '../../variables/environment';

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
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
			const response = await axios.post(
				`${API_BASE_URL}/login`,
				{
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);
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
			console.log(error.response.data.message);
		}
	};

	const disableSubmit = !email || !password;

	return (
		<Layout title="Log In">
			<Hero>
				<h1>Login</h1>
				<form onSubmit={(e) => handleSubmit(e)}>
					<Email id="email" value={email} setEmail={setEmail} />
					<Password id="password" value={password} setPassword={setPassword} />
					<button type="submit" disabled={disableSubmit} onClick={(e) => handleSubmit(e)}>
						Login
					</button>
				</form>
				<Link to="/signup">Don&apos;t have an account?</Link>
			</Hero>
		</Layout>
	);
}

export default LoginPage;
