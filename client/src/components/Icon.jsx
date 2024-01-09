import PropTypes from 'prop-types';
import React from 'react';

function Icon({ id, size }) {
  if (!id) {
    return null;
  }
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}>
      <use href={`/images/icons/sprite.svg#${id.toString()}`} />
    </svg>
  );
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 24,
};

export default Icon;
