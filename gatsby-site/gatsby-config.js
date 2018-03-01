module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-native-web',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kiix6x9aeuxc`,
        accessToken: `90fda85e11add259a5cededc7fc023069128b13633957c2ad26e203a4161e991`,
      },
    },
  ],
};
