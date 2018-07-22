import React from 'react';

const Centered = ({ className, ...props }) => (
  <div
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}
    className={className}
  />
);

export default Centered;
