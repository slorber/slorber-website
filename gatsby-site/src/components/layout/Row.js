import React from 'react';

const Row = ({ className, ...props }) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
    {...props}
    className={className}
  />
);

export default Row;
