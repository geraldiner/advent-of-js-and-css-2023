import React from 'react';

export default function Hero({children}) {
	return (
		<section className="hero">
			<div className="hero-logo">
				<img src="/images/logos/secret-santa-logo.svg" alt="Secret Santa App logo" />
			</div>
			<div className="hero-content">{children}</div>
		</section>
	);
}
