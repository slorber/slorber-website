import React from 'react';
import SmallProfileSection from 'components/profile/SmallProfileSection';
import LargeProfileSidebar from 'components/profile/LargeProfileSidebar';
import SvgBackgroundSection from 'components/svgBackground/SvgBackgroundSection';

const ProfileAndSections = ({ sections }) => {
  return (
    <React.Fragment>
      <SmallProfileSection />
      {sections.map(section => (
        <SvgBackgroundSection key={section.id} {...section} />
      ))}
      <LargeProfileSidebar />
    </React.Fragment>
  );
};

export default ProfileAndSections;
