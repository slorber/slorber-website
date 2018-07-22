import React from "react";
import { DefaultMountUnmountAnimation } from "utils/Animations";
import Centered from 'components/Centered';
import { IsSmall } from 'constants/mediaQueries';
import ProfileCard from 'components/profile/ProfileCard';


const LargeProfileSidebar = () => (
  <Centered
    css={{
      position: "fixed",
      zIndex: 1,
      top: 0,
      width: "30vw",
      height: "100vh",
      [IsSmall]: {
        display: "none"
      }
    }}
  >
    <DefaultMountUnmountAnimation>
      <ProfileCard
        css={{
          width: 350,
          maxHeight: "78vh",
          maxWidth: "25vw"
        }}
      />
    </DefaultMountUnmountAnimation>
  </Centered>
);
export default LargeProfileSidebar;
