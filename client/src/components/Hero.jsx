import PropTypes from 'prop-types';
import React from 'react';

export default function Hero({children}) {
	return (
		<section className="hero">
			<div className="hero-container">
				<div className="hero-content">{children}</div>
			</div>
		</section>
	);
}

Hero.propTypes = {
	children: PropTypes.node,
};
