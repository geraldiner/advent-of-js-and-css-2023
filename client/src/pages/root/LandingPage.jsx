import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import Layout from '../../layouts/Layout';

function LandingPage() {
	const [displayName, setDisplayName] = useState('World');
	const navigate = useNavigate();

	const {currentUser} = useSelector((state) => state.user);

	useEffect(() => {
		if (currentUser) {
			navigate('/a/dashboard');
		}
	}, [navigate, currentUser]);

	const handleOnchange = (e) => {
		setDisplayName(e.target.value);
	};

	return (
		<Layout>
			<section>
				<h1>Landing</h1>
				<h2>Hello, {displayName}!</h2>
				<form>
					<label htmlFor="firstName">
						<span>Name: </span>
						<input name="firstName" type="text" value={displayName} onChange={handleOnchange} />
					</label>
				</form>
				<Link to="/login">Go to Login</Link>
				<Link to="/signup">Go to Signup</Link>
			</section>
		</Layout>
	);
}

export default LandingPage;
