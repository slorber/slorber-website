import React from 'react';
import { IsLarge } from 'constants/mediaQueries';
import Centered from 'components/layout/Centered';
import SvgBackground from 'components/svgBackground/SvgBackground';
import ProfileCard from 'components/profile/ProfileCard';
import { SvgPattern6 } from 'components/svgBackground/SvgPatterns';

const SmallProfileSectionBackground = {
  color: '#ff7043',
  colorDark: '#c63f17',
  colorLight: '#ffa270',
  svgComponent: SvgPattern6,
};

const SmallProfileSection = ({ className, ...props }) => (
  <SvgBackground
    {...SmallProfileSectionBackground}
    css={{
      [IsLarge]: {
        display: 'none',
      },
    }}
    {...props}
    className={className}
  >
    <Centered
      css={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <div
        css={{
          maxWidth: 700,
          paddingTop: 80,
          paddingBottom: 80,
          paddingRight: 30,
          paddingLeft: 30,
        }}
      >
        <ProfileCard />
      </div>
    </Centered>
  </SvgBackground>
);

export default SmallProfileSection;
