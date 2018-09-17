import React from 'react';
import { responsiveHeightSpacing } from 'constants/mediaQueries';
import Centered from 'components/layout/Centered';
import Text, { Bold, H1, Texts } from 'components/Text';
import { insecableSpace } from 'utils/stringUtils';

const ProfileContent = () => (
  <Centered
    css={{
      width: '100%',
      textAlign: 'center',
      ...responsiveHeightSpacing('marginTop'),
    }}
  >
    <Text fontSize="l">
      <Text noWrap>
        I'm <Bold>Sébastien</Bold>,{' '}
      </Text>
      <Text noWrap>
        a <Bold>freelance</Bold> developer
      </Text>
      <Text noWrap>
        specialized{insecableSpace}in{insecableSpace}
        <Bold>React</Bold>
      </Text>
    </Text>
  </Centered>
);

export default ProfileContent;
