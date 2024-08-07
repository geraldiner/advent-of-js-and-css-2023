import React from 'react';

function Footer() {
	const today = new Date();
	return (
		<footer>
			<div className="footer">
				<div className="footer-logo">
					<img src="/images/logos/secret-santa-logo_small.svg" alt="" />
				</div>
				<p className="footer-copyright">
					Copyright &copy; {today.getFullYear()}.{' '}
					<a href="https://www.adventofjs.com/" target="_blank" rel="noreferrer">
						Ah Ha Creative, LLC
					</a>
					. All Rights Reserved.
				</p>
				<ul className="footer-links">
					<li>Terms & Conditions</li>. <li>Privacy Policy</li>. <li>Disclaimers</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
