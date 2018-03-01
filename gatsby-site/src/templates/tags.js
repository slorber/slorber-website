import React from "react";
import PropTypes from "prop-types";

// Components
import Link from "gatsby-link";

const Tags = ({data}) => {
  const {edges} = data.allContentfulBlogPostTag;
  const totalCount = edges.length;
  return (
    <div>
      <h1>{totalCount + " tags"}</h1>
      <ul>
        {edges.map(({node}) => {
          const {id, slug, name, description} = node;
          return (
            <li key={id}>
              <Link to={`/tags/${slug}`}>{name}</Link>
              <div>
                {description ? description.description : "No description"}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default Tags;

export const pageQuery = graphql`
    query TagsPage {
        allContentfulBlogPostTag(
            limit: 10000,
            sort: {
                fields: [name],
                order: ASC,
            }
            filter: {
                node_locale: {
                    eq: "fr"
                }
            }
        ) {
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