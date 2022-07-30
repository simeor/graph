import { gql } from "graphql-request";

export const GET_ALL_BLOGS_QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export const GET_SLUGS = gql`
  {
    posts {
      slug
    }
  }
`;

export const GET_SLUG = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      content {
        html
      }
      coverPhoto {
        url
      }
    }
  }
`;
