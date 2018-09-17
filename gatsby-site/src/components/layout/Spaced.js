import React from 'react';

const Spaced = ({ spacing, className, ...props }) => (
  <div
    className={className}
    css={{
      '> * + *': { marginTop: 10 },
    }}
    {...props}
  />
);

export default Spaced;
