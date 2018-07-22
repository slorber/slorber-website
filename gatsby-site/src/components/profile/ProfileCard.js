import React from "react";
import { SocialIcon } from "react-social-icons";
import Centered from 'components/Centered';
import Card from 'components/Card';
import { IsLarge, responsiveHeightSpacing } from 'constants/mediaQueries';

const StackOverflowFlair = () => (
  <a
    href="https://stackoverflow.com/users/82609/sebastien-lorber"
    target="_blank"
    css={{
      position: "relative",
      overflow: "hidden"
    }}
  >
    <img
      css={{
        width: 208,
        height: 58,
        position: "relative"
      }}
      src="https://stackoverflow.com/users/flair/82609.png?theme=dark"
      alt="profile for Sebastien Lorber at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
      title="profile for Sebastien Lorber at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/>
  </a>
);

const ProfileSocialIcon = ({ url, color }) => (
  <div
    css={{ padding: 5 }}
  >
    <SocialIcon url={url} color={color}/>
  </div>
);


const ProfileCard = ({ className, ...props }) => (
  <Card
    css={{
      position: "relative",
      padding: 30,
      paddingTop: 80
    }}
    {...props}
    className={className}
  >
    <Centered
      css={{
        position: "absolute",
        top: -60,
        right: 0,
        width: "100%"
      }}
    >
      <img
        css={{
          width: 120,
          height: 120,
          borderRadius: 120,
          //boxShadow: "-2px 4px 6px -1px rgba(0,0,0,0.4)",
          boxShadow: "0 4px 5px #a1a1a1"
        }}
        src={"https://pbs.twimg.com/profile_images/573206276819140608/gKAusMeX_400x400.jpeg"}
      />
    </Centered>
    <Centered css={{
      width: "100%",
      textAlign: "center"
    }}>
      <h1>I'm Sebastien!</h1>
    </Centered>
    <Centered css={{
      width: "100%",
      textAlign: "center",
      ...responsiveHeightSpacing("marginTop")
    }}>
      I'm a freelance full-stack developer from Paris, specialized in React ecosystem since 2014, working remotely on
      interesting projects
    </Centered>
    <Centered css={{
      width: "100%",
      ...responsiveHeightSpacing("marginTop"),
      [`${IsLarge} and (max-height: 500px)`]: {
        display: "none"
      }
    }}>
      <ProfileSocialIcon url="https://github.com/slorber" color="#24292e"/>
      <ProfileSocialIcon url="https://twitter.com/sebastienlorber"/>
      <ProfileSocialIcon url="https://www.linkedin.com/in/sebastienlorber/"/>
      <ProfileSocialIcon url="mailto:lorber.sebastien@gmail.com" color="#c71610"/>
    </Centered>
    <Centered css={{
      width: "100%",
      ...responsiveHeightSpacing("marginTop"),
      [`${IsLarge} and (max-height: 550px)`]: {
        display: "none"
      }
    }}
    >
      <StackOverflowFlair/>
    </Centered>
  </Card>
);

export default ProfileCard;


