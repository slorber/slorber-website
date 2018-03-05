import React from 'react'
import Link from 'gatsby-link'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const styles = StyleSheet.create({
  box: { padding: 10, margin: 10, borderWidth: 1, borderColor: "black" },
  text: { fontWeight: 'bold', color: "red" },
  button: {
    marginVertical: 40, paddingVertical: 20, paddingHorizontal: 10,
    borderWidth: 1, borderColor: "black", backgroundColor: "lightgrey", alignItems: "center"
  },
  buttonText: { fontWeight: 'bold', color: "black" },
});


const BlogPosts = ({blogPosts}) => {
  return (
    <ul>
      {blogPosts.map(blogPost => {
        const {id, slug, title, summary} = blogPost;
        return (
          <li key={id}>
            <Link to={`/posts/${slug}`}>{title}</Link>
            <div>
              {summary.summary}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Block = ({children}) => (
  <View
    style={{
      width: "100%",
      height: "100vh",
      border: "solid",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </View>
);

const HomePage = ({pathContext, data}) => {
  const blogPosts = data.allContentfulBlogPost.edges.map(e => e.node);
  const totalCount = blogPosts.length;

  const header = `${totalCount} post${totalCount === 1 ? "" : "s"}`;

  return (
    <View>


      <Block>
        <Text>Hey</Text>
      </Block>

      <Block>
        <Text>Ho</Text>
      </Block>

      <Text style={{ fontWeight: 'bold', color: "red" }}>{header}</Text>


      <BlogPosts blogPosts={blogPosts}/>

      <Link to="/tags">All tags</Link>

    </View>
  );
};

export default HomePage



export const pageQuery = graphql`
    query HomePage($locale: String) {
        allContentfulBlogPost(
            filter: {
                node_locale: {
                    eq: $locale
                }
            },
            sort: {
                fields: [createdAt],
                order: DESC
            }
        ) {
            edges {
                node {
                    id
                    slug
                    title
                    summary {
                        id
                        summary
                    }
                    content {
                        __typename
                        ... on ContentfulBlogPostText {
                            id
                            text {
                                id
                                text
                            }
                        }
                        ... on ContentfulBlogPostCode {
                            id
                            title
                            javascript {
                                id
                                javascript
                            }
                        }
                    }
                    tags {
                        id
                        name
                        slug
                    }
                }
            }
        }
    }
`;

