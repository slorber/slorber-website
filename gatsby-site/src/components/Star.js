import React from 'react';
import Row from 'components/layout/Row';
import { range } from 'lodash';

const DefaultFill = '#ffce1f';

const Star = ({ fill = DefaultFill }) => (
  <svg height={20} width={20} fill={fill}>
    <path d="M9.9 1.1L3.3 21.78l16.5-13.2H0l16.5 13.2z" />
  </svg>
);

export default Star;

export const Stars = ({ count = 0, spacing = 5, fill = DefaultFill }) => (
  <Row
    css={{
      '> * + *': {
        marginLeft: spacing,
      },
    }}
  >
    {range(0, count).map(i => (
      <div key={i}>
        <Star fill={fill} />
      </div>
    ))}
  </Row>
);

export const StarsRow = ({ count, children }) => (
  <Row css={{ flexWrap: 'wrap' }}>
    <div css={{ flex: '0 0 130px' }}>
      <Stars count={count} />
    </div>
    <div css={{ flex: '1 0  200px' }}>{children}</div>
  </Row>
);
