import React from 'react';
import PropTypes from 'prop-types';

const Color = ({ colors }) => (
  <div style={{
    backgroundColor: colors.code.hex, padding: '30px', margin: '10px', boxShadow: '#9ca0a073 0px 0px 2px 4px',
  }}
  />
);

Color.propTypes = {
  colors: PropTypes.shape({
    code: PropTypes.shape({
      hex: PropTypes.string,
    }),
  }).isRequired,
};

export default Color;
