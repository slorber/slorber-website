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

const HomePage = ({pathContext, data}) => {
  const {edges} = data.allContentfulBlogPost;
  const totalCount = edges.length;

  const header = `${totalCount} post${totalCount === 1 ? "" : "s"}`;

  return (
    <View style={styles.box}>

      <Text style={styles.text}>{header}</Text>

      <ul>
        {edges.map(({node}) => {
          const {id, slug, title, summary} = node;
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

      <Link to="/tags">All tags</Link>

      <TouchableOpacity style={styles.button} onPress={() => alert("it works")}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>

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