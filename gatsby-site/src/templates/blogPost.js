import React from "react";
import PropTypes from "prop-types";

// Components
import Link from "gatsby-link";

const BlogPostContentText = ({text}) => (
  <p>
    {text.text}
  </p>
);

const BlogPostContentCode = ({title, javascript}) => (
  <div>
    {title && (<div>{title}</div>)}
    <code>
      {javascript.javascript}
    </code>
  </div>
);


const BlogPostContentComponents = {
  "ContentfulBlogPostText": BlogPostContentText,
  "ContentfulBlogPostCode": BlogPostContentCode,
};

const BlogPost = ({pathContext, data}) => {
  const {edges} = data.allContentfulBlogPost;
  if (edges.length === 0) {
    // TODO
    return (
      <div>
        Not found
      </div>
    );
  }
  const blogPost = edges[0].node;

  console.debug("blogPost", blogPost);
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <div>
        {blogPost.tags.map(tag => {
          return (
            <div key={tag.slug} >
              <Link to={`/tags/${tag.slug}`}>
                {tag.name}
              </Link>
            </div>
          );
        })}
      </div>
      <h2>{blogPost.summary && blogPost.summary.summary}</h2>
      <h3>{blogPost.slug}</h3>
      {blogPost.content && (
        <ul>
          {blogPost.content.map(content => {
            const Comp = BlogPostContentComponents[content.__typename];
            return <Comp key={content.id} {...content}/>;
          })}
        </ul>
      )}
      <Link to="/tags">All tags</Link>
    </div>
  );
};


export default BlogPost;


export const pageQuery = graphql`
    query BlogPostPage($blogPostSlug: String!) {
        allContentfulBlogPost(
            limit: 2000,
            sort: {
                fields: [createdAt],
                order: DESC,
            }
            filter: {
                slug: {
                    eq: $blogPostSlug
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

