import React from 'react';
import { HomeSections } from 'data/homeData';
import SmallProfileSection from 'components/profile/SmallProfileSection';
import LargeProfileSidebar from 'components/profile/LargeProfileSidebar';
import SvgBackgroundSection from 'components/svgBackground/SvgBackgroundSection';

const HomePage = ({ pathContext, data }) => {
  return (
    <React.Fragment>
      <SmallProfileSection />
      {HomeSections.map(section => (
        <SvgBackgroundSection key={section.id} {...section} />
      ))}
      <LargeProfileSidebar />
    </React.Fragment>
  );
};

export default HomePage;
