module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: `https://sebastienlorber.com`,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
};
