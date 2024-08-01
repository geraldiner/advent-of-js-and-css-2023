import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../components/Footer';

export default function Layout({children}) {
	return (
		<>
			<main>{children}</main>
			<Footer />
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};
