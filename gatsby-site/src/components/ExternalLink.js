import React from 'react';
import { Bold } from 'components/Text';

const ExternalLink = ({
  href,
  target = '_blank',
  color = '#009cbf',
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
    <Bold css={{textDecoration: "inherit"}}>{children}</Bold>
  </a>
);

export default ExternalLink;
