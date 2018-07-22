import React from "react";
import { DefaultMountUnmountAnimation } from "utils/Animations";
import Centered from 'components/layout/Centered';
import { IsLarge } from 'constants/mediaQueries';
import Card from 'components/Card';
import SvgBackground from 'components/svgBackground/SvgBackground';


const SvgBackgroundSection = ({
                   children,
                   ...props
                 }) => (
  <SvgBackground
    {...props}
  >
    <Centered
      css={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        [IsLarge]: {
          paddingLeft: "30vw"
        },
      }}
    >
      <DefaultMountUnmountAnimation
        css={{
          width: "100%",
          padding: 40,
          maxWidth: 700,
        }}
      >
        <Card
          css={{
            width: "100%",
            minHeight: 300,
          }}
        >
          {children}
        </Card>
      </DefaultMountUnmountAnimation>
    </Centered>
  </SvgBackground>
);

export default SvgBackgroundSection;
