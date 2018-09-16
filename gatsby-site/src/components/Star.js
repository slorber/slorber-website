import React from 'react';
import Row from 'components/layout/Row';
import { range } from 'lodash';

const DefaultSize = 20;
const DefaultFill = '#ffce1f';

const Star = ({ size = DefaultSize, fill = DefaultFill }) => (
  <svg height={size} width={size} fill={fill}>
    <path d="M9.9 1.1L3.3 21.78l16.5-13.2H0l16.5 13.2z" />
  </svg>
);

export default Star;

export const Stars = ({
  count = 0,
  spacing = 5,
  size = DefaultSize,
  fill = DefaultFill,
}) => (
  <Row
    css={{
      '> * + *': {
        marginLeft: spacing,
      },
    }}
  >
    {range(0, count).map(i => (
      <div key={i}>
        <Star size={size} fill={fill}/>
      </div>
    ))}
  </Row>
);

export const StarsRow = ({count, children}) => (
  <Row>
    <div css={{width: 140}}>
      <Stars count={count}/>
    </div>
    <div>
      {children}
    </div>
  </Row>
);
