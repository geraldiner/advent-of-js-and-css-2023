import React from 'react';

function Icon({id, extraClassNames, size = 24}) {
	if (!id) {
		return null;
	}
	return (
		<div className={`icon ${extraClassNames ?? ''}`}>
			<svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
				<use href={`/images/icons/sprite.svg#${id.toString()}`} />
			</svg>
		</div>
	);
}

export default Icon;
