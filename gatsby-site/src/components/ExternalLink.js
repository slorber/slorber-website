import React from 'react';
import Text, { Bold } from 'components/Text';

const ExternalLink = ({
  href,
  target = '_blank',
  color = '#74b9b2',
  children,
  ...props
}) => (
  <a
    href={href}
    target={target}
    {...props}
    css={{
      color,
    }}
  >
    <Bold>{children}</Bold>
  </a>
);

export default ExternalLink;
