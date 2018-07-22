import React from "react";
import { IsLarge } from 'constants/mediaQueries';
import Centered from 'components/layout/Centered';
import { HomeSmallProfileSection } from 'data/homeData';
import SvgBackground from 'components/svgBackground/SvgBackground';
import ProfileCard from 'components/profile/ProfileCard';

const SmallProfileSection = ({className,...props}) => (
  <SvgBackground
    {...HomeSmallProfileSection}
    css={{
      [IsLarge]: {
        display: "none"
      }
    }}
    {...props}
    className={className}
  >
    <Centered
      css={{
        width: "100%",
        height: "100%",
        minHeight: "100vh"
      }}
    >
      <div
        css={{
          maxWidth: 700,
          paddingTop: 80,
          paddingBottom: 80,
          paddingRight: 30,
          paddingLeft: 30
        }}
      >
        <ProfileCard/>
      </div>
    </Centered>
  </SvgBackground>
);

export default SmallProfileSection;
