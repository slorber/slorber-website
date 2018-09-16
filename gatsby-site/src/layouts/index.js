import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { injectGlobal } from 'emotion';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Sébastien Lorber - freelance React / ReactNative"
      meta={[
        {
          name: 'description',
          content:
            "Sébastien Lorber's website - Fullstack developer specialized in React / ReactNative ",
        },
        {
          name: 'keywords',
          content:
            'sebastien lorber, freelance, react, ReactJS, Apollo, graphql, react-native, ReactNative, fullstack, scala, functional programming',
        },
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
