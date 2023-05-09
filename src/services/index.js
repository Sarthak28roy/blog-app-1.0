import {request, gql} from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async() => {
    const query = gql`
        query Assets {
            assets {
            createdAt
            id
            publishedAt
            fileName
            url
            updatedAt
            }
            postsConnection {
            edges {
                node {
                author {
                    description
                    name
                    id
                    photo {
                    url
                    }
                }
                featuredPost
                createdAt
                slug
                tittle
                excerpt
                featuredImage {
                    url
                }
                categories {
                    nAme
                    slug
                }
                }
            }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}

export const getPostDetails = async(slug) => {
  const query = gql`
  query GetPostDetails($slug : String!) {
    post(where: {slug: $slug}) {
      tittle
      excerpt
      featuredImage {
        url
      }
      author{
        name
        description
        photo {
          url
        }
      }
      createdAt
      slug
      content {
        raw
      }
      categories {
        nAme
        slug
      }
    }
  }
  `
  const result = await request(graphqlAPI, query, { slug });

  return result.post;
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        tittle
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        tittle
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          nAme
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              description
              name
              id
              photo {
              url
              }
          }
            createdAt
            slug
            tittle
            excerpt
            featuredImage {
              url
            }
            categories {
              nAme
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};