import React from 'react';

const Card = ({ className, ...props }) => (
  <div
    css={{
      padding: 20,
      backgroundColor: 'white',
      boxShadow: '10px 10px rgba(0,0,0,0.20)',
    }}
    {...props}
    className={className}
  />
);

export default Card;
