import React from 'react';
import {
  SvgPattern1,
  SvgPattern2,
  SvgPattern4,
  SvgPattern6,
  SvgPattern7,
  SvgPattern8,
} from 'components/svgBackground/SvgPatterns';
import createId from 'utils/createId';
import { responsiveHeightSpacing } from 'constants/mediaQueries';
import Centered from 'components/layout/Centered';
import Text from 'components/Text';

export const HomeSmallProfileSection = {
  color: '#ff7043',
  colorDark: '#c63f17',
  colorLight: '#ffa270',
  svgComponent: SvgPattern6,
};

export const HomeSections = [
  {
    id: createId(),
    color: '#bbdefb',
    colorDark: '#8aacc8',
    colorLight: '#eeffff',
    svgComponent: SvgPattern1,
    children: <div>coucou je suis Sébastien</div>,
  },
  {
    id: createId(),
    color: '#81c784',
    colorDark: '#519657',
    colorLight: '#b2fab4',
    svgComponent: SvgPattern2,
    children: <div>Je suis développeur React</div>,
  },
  {
    id: createId(),
    color: '#e1bee7',
    colorDark: '#af8eb5',
    colorLight: '#fff1ff',
    svgComponent: SvgPattern8,
    children: <div>J'aime les hamburgers</div>,
  },
  {
    id: createId(),
    color: '#80cbc4',
    colorDark: '#4f9a94',
    colorLight: '#b2fef7',
    svgComponent: SvgPattern4,
    children: <div>Il fait chaud</div>,
  },
  {
    id: createId(),
    color: '#e5b96c',
    colorDark: '#b1893f',
    colorLight: '#ffeb9c',
    svgComponent: SvgPattern7,
    children: <div>Chichouuu</div>,
  },
];

export const ProfileContent = () => (
  <Centered
    css={{
      width: '100%',
      textAlign: 'center',
      ...responsiveHeightSpacing('marginTop'),
    }}
  >
    <Text fontSize="m">
      Hi! I'm <Text bold>Sébastien</Text>, a freelance developer from <Text bold>Paris</Text>.
    </Text>

    <Text css={{
      ...responsiveHeightSpacing("marginTop"),
    }}>
      I have over 4 years of experience as a <Text bold>React</Text> developer, and over 10 years of experience as a fullstack developer in various positions (consultant, CTO, freelancer).
    </Text>
  </Centered>
);
