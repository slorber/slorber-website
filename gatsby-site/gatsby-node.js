const path = require("path");
const slug = require("slug");

// Hack for:
// https://stackoverflow.com/questions/49347775/how-to-share-graphql-fragments-between-node-and-gatsby-pages
// https://twitter.com/sseraphini/status/975347293179301888
const graphql = ([str]) => str;

const getAllTagsQuery = graphql`
    query getAllTagsQuery {
        allContentfulBlogPostTag {
            edges {
                node {
                    id
                    slug
                    name
                    description {
                        description
                    }
                }
            }
        }
    }
`;


const getAllBlogPostsQuery = graphql`
    query getAllBlogPostsQuery {
        allContentfulBlogPost {
            edges {
                node {
                    id
                    slug
                    title
                    summary {
                        id
                        summary
                    }
                }
            }
        }
    }
`;

exports.onCreatePage = ({page}) => {
  console.log("page created: " + page.path);
};


const createHomePages = ({graphql, boundActionCreators: {createPage}}) => {
  const homeTemplate = path.resolve("src/templates/home.js");
  return new Promise(resolve => {
    createPage({
      path: `/`,
      component: homeTemplate,
      context: {
        locale: "en",
      },
    });
    createPage({
      path: `/fr`,
      component: homeTemplate,
      context: {
        locale: "fr",
      },
    });
    resolve();
  });
};

const createTagPages = ({graphql, boundActionCreators: {createPage}}) => {
  const tagTemplate = path.resolve("src/templates/tag.js");
  return graphql(getAllTagsQuery).then(result => {
    if (result.errors) {
      throw new Error(JSON.stringify(result.errors, null, 2));
    }
    const tags = result.data.allContentfulBlogPostTag.edges.map(e => e.node);
    tags.forEach(tag => {
      const path = `/tags/${tag.slug}`;
      console.log(path);
      createPage({
        path,
        component: tagTemplate,
        context: {
          tagSlug: tag.slug,
        },
      });
    });
  });
};

const createTagsPage = ({graphql, boundActionCreators: {createPage}}) => {
  const tagsTemplate = path.resolve("src/templates/tags.js");
  return new Promise(resolve => {
    createPage({
      path: `/tags`,
      component: tagsTemplate,
    });
    resolve();
  })
};


const createBlogPostsPages = ({graphql, boundActionCreators: {createPage}}) => {
  const blogPostTemplate = path.resolve("src/templates/blogPost.js");
  return graphql(getAllBlogPostsQuery).then(result => {
    if (result.errors) {
      throw new Error(JSON.stringify(result.errors, null, 2));
    }
    const blogPosts = result.data.allContentfulBlogPost.edges.map(e => e.node);
    blogPosts.forEach(blogPost => {
      const path = `/posts/${blogPost.slug}`;
      console.log(path);
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          blogPostSlug: blogPost.slug,
        },
      });
    });
  });
};


exports.createPages = (...args) => {
  return Promise.all([
    createHomePages(...args),
    createTagPages(...args),
    createTagsPage(...args),
    createBlogPostsPages(...args),
  ]);
};
