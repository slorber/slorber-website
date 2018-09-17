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
import Text, { Bold, fontSizes, H1, H2, Texts } from 'components/Text';
import ExternalLink from 'components/ExternalLink';
import Row from 'components/layout/Row';
import { Stars, StarsRow } from 'components/Star';
import Spaced from 'components/layout/Spaced';

export const HomeSections = [
  {
    id: createId(),
    color: '#bbdefb',
    colorDark: '#8aacc8',
    colorLight: '#eeffff',
    svgComponent: SvgPattern1,
    title: 'Welcome',
    children: (
      <Spaced spacing={20}>
        <Text>
          I am <Bold>Sébastien Lorber</Bold>, a fullstack developer living close
          to <Bold>Paris</Bold>.
        </Text>

        <Text>
          I'm a <Bold>freelancer</Bold> specialized in the marvelous{' '}
          <Bold>React</Bold> ecosystem, and I am <Bold>available for hire</Bold>.
        </Text>

        <Text>
          I tend to prefer working <Bold>remotely</Bold> on my standing desk,
          but stay open for on-site opportunities in Paris.
        </Text>

        <Text>
          I also like:
          <ul css={{ marginTop: 10 }}>
            <li>
              Reading/listening about technology, science, personal development,
              health
            </li>
            <li>
              Water sports, particularly the ones involving "natural forces"
              like surf, kitesurf or funboard
            </li>
            <li>Running, I've run 2 marathons (also did a medium triathlon)</li>
            <li>
              Cooking, drinking, friends and enjoying small pleasures of life
              ;-)
            </li>
          </ul>
        </Text>
      </Spaced>
    ),
  },
  {
    id: createId(),
    color: '#81c784',
    colorDark: '#519657',
    colorLight: '#b2fab4',
    svgComponent: SvgPattern2,
    title: 'Work experience',
    children: (
      <Spaced spacing={20}>
        <div>
          <H2>Since 2017</H2>
          I'm now a <Bold>freelancer</Bold>, specializing in the{' '}
          <Bold>React</Bold> ecosystem (early adopter, since decembre 2013). I'm
          the <Bold>React expert</Bold> of{' '}
          <ExternalLink href="https://www.alqemist.com/">Alqemist</ExternalLink>,
          a <Bold>product studio</Bold> composed of a dozen remote freelancers
          like me, but also take small projects on my own.<br />
          I have been involved on various projects, such as:
          <ul css={{ marginTop: 10 }}>
            <li>
              <ExternalLink href="http://www.cabestan.com/">
                Cabestan
              </ExternalLink>: we delivered a complex static demo of their main
              software v2 redesign, as a React SPA
            </li>
            <li>
              <ExternalLink href="https://www.mogment.com/">
                Mogment
              </ExternalLink>: I built the frontend architecture and many
              features of this React/Apollo/GraphQL for an early stage startup
              MVP
            </li>
            <li>
              <ExternalLink href="#">???????</ExternalLink>: I built alone 2
              React-Native mobile app for a secret customer (also helped on the
              Java 8 backend)
            </li>
            <li>
              <ExternalLink href="https://www.hubstairs.com/">
                Hubstairs
              </ExternalLink>: I audited their React apps and helped implement
              some recommendations
            </li>
            <li>
              <ExternalLink href="https://shotgun.live/">Shotgun</ExternalLink>:
              I audited and migrated a quick-and-dirty ReactNative app to
              Expo/Apollo/React-navigation
            </li>
          </ul>
        </div>

        <Text>
          <H2>From 2013 to 2017</H2>
          I have been <Bold>CTO</Bold> of the early stage startup{' '}
          <ExternalLink href="https://stample.co">Stample</ExternalLink>. Our
          tech stack was mostly React and Scala. We deployed our first React app
          in production mid-2014.
        </Text>

        <Text>
          <H2>Before 2013</H2>
          I have been a Java backend engineer, working on high traffic websites
          like:
          <ul css={{ marginTop: 10 }}>
            <li>
              <ExternalLink href="https://www.oui.sncf/">
                Voyages-SNCF
              </ExternalLink>: main train booking website in France
            </li>
            <li>
              <ExternalLink href="https://www.laposte.fr/particulier/digiposte/tous-mes-documents-partout-et-tout-le-temps">
                Digiposte
              </ExternalLink>: a virtual document safe created by French postal
              service La Poste
            </li>
            <li>
              <ExternalLink href="https://www.renault.fr/">
                RenaultShop
              </ExternalLink>: the e-commerce platform of the famous French car
              constructor
            </li>
          </ul>
        </Text>
      </Spaced>
    ),
  },
  {
    id: createId(),
    color: '#e1bee7',
    colorDark: '#af8eb5',
    colorLight: '#fff1ff',
    svgComponent: SvgPattern8,
    title: "What I'm good at",
    children: (
      <Spaced spacing={20}>
        <StarsRow count={5}>React</StarsRow>
        <StarsRow count={5}>Redux / Redux-saga</StarsRow>
        <StarsRow count={4}>React Native / Expo</StarsRow>
        <StarsRow count={4}>Apollo / GraphQL</StarsRow>
        <StarsRow count={4}>Scala / Play2</StarsRow>
        <StarsRow count={4}>Java 8 / Spring</StarsRow>
        <StarsRow count={4}>Functional programming</StarsRow>
        <StarsRow count={3}>Node</StarsRow>
        <StarsRow count={3}>EventSourcing / CQRS / DDD</StarsRow>
        <StarsRow count={3}>Machine learning</StarsRow>
        <StarsRow count={2}>ReasonML</StarsRow>
      </Spaced>
    ),
  },
  {
    id: createId(),
    color: '#80cbc4',
    colorDark: '#4f9a94',
    colorLight: '#b2fef7',
    svgComponent: SvgPattern4,
    title: 'My contributions',
    children: (
      <Spaced spacing={20}>
        <div>
          <Text>
            I am contributing open-source code on{' '}
            <ExternalLink href="https://github.com/slorber">
              Github
            </ExternalLink>, with over{' '}
            <ExternalLink href="https://showmyprs.com/user/slorber">
              150 pull requests
            </ExternalLink>.<br/>
            Some projects I'm contributing to:
          </Text>
          <ul css={{ marginTop: 10 }}>
            <li><Bold>Redux</Bold>: react-redux, redux-saga </li>
            <li><Bold>React-native</Bold>: Expo, react-navigation, react-native-calendar</li>
            <li><Bold>Gatsby</Bold>: react-native-web plugin</li>
          </ul>
        </div>

        <div>
          <Text>
            I also maintain some personal packages like:
          </Text>
          <ul css={{ marginTop: 10 }}>
            <li><ExternalLink href="https://github.com/slorber/react-nested-loader">react-nested-loader</ExternalLink></li>
            <li><ExternalLink href="https://github.com/slorber/react-native-scroll-into-view">react-native-scroll-into-view</ExternalLink></li>
            <li><ExternalLink href="https://github.com/slorber/react-reboot">react-reboot</ExternalLink></li>
            <li><ExternalLink href="https://github.com/slorber/AutoAnimate">AutoAnimate</ExternalLink></li>
            <li><ExternalLink href="https://github.com/slorber/ajax-interceptor">ajax-interceptor</ExternalLink></li>
          </ul>
        </div>

        <div>
          <Text>
            I earned 50k on StackOverflow by giving quality answers related to React, such as:
          </Text>
          <ul css={{ marginTop: 10 }}>
            <li>
              <ExternalLink href="https://stackoverflow.com/a/28046731/82609">
                How to perform debounce in React
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://stackoverflow.com/a/34623840/82609">
                Using Redux-saga for async flows
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://stackoverflow.com/a/31564812/82609">
                Children VS HOC VS render props
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://stackoverflow.com/a/31563614/82609">
                Parent/child communication patterns
              </ExternalLink>
            </li>
          </ul>
        </div>

        <Text>
          I also share my opinions and code snipets on{' '}
          <ExternalLink href="https://twitter.com/sebastienlorber">
            Twitter
          </ExternalLink>.
        </Text>
      </Spaced>
    ),
  },
  {
    id: createId(),
    color: '#e5b96c',
    colorDark: '#b1893f',
    colorLight: '#ffeb9c',
    svgComponent: SvgPattern7,
    children: <div></div>,
  },
];
