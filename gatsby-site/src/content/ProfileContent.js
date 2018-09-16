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
      I'm{insecableSpace}
      <Bold>Sébastien</Bold>, a{insecableSpace}
      <Bold>freelance</Bold>
      {insecableSpace}developer specialized{insecableSpace}in{insecableSpace}
      <Bold>React</Bold>
    </Text>
  </Centered>
);

export default ProfileContent;
