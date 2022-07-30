import { GraphQLClient } from "graphql-request";
import { GET_ALL_BLOGS_QUERY, GET_SLUGS, GET_SLUG } from "./blogQuerys";

const graphCMS = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/******/master"
);

export const blogsService = {
  getBlogs: graphCMS.request(GET_ALL_BLOGS_QUERY),
  getSlugs: graphCMS.request(GET_SLUGS),
  getSlug: (slug) => graphCMS.request(GET_SLUG, { slug }),
};
