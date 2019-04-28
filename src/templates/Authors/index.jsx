import React from "react";
import Layout from "../../components/Layout";

export default ({
  data: {
    allAuthorYaml: { edges: authorNodes }
  }
}) => (
  <Layout>
    {authorNodes.map(({ node: author }, index) => (
      <div key={`author-${author.id}`}>{author.id}</div>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query AuthorsQuery {
    allAuthorYaml {
      edges {
        node {
          id
          bio
          twitter
        }
      }
    }
  }
`;
