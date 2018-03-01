import React from "react";
import PropTypes from "prop-types";

// Components
import Link from "gatsby-link";

const Tag = ({pathContext, data}) => {
  const {tagSlug} = pathContext;
  const {edges} = data.allContentfulBlogPost;
  const totalCount = edges.length;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tagSlug}"`;

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({node}) => {
          const {id, title, summary} = node;
          return (
            <li key={id}>
              <Link to={id}>{title}</Link>
              <div>
                {summary.summary}
              </div>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </div>
  );
};


export default Tag;

export const pageQuery = graphql`
    query TagPage($tagSlug: String!) {
        allContentfulBlogPost(
            limit: 2000,
            sort: {
                fields: [createdAt],
                order: DESC,
            }
            filter: {
                tags: {
                    slug: {
                        eq: $tagSlug
                    }
                }
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
                }
            }
        }
    }
`;