import React from 'react';
import {Helmet} from 'react-helmet';

import Footer from '../components/Footer';

export default function Layout({title, children}) {
	return (
		<>
			<Helmet>
				<title>Secret Santa App | {title}</title>
			</Helmet>
			<main>{children}</main>
			<Footer />
		</>
	);
}
