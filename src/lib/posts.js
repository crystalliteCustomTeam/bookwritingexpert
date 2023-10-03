import graphqlRequest from "@/lib/graphqlRequest";

export async function getPostList(endCursor = null, taxonomy = null) {

  let condition = `after: "${endCursor}", first: 10, where: {orderby: {field: DATE, order: DESC}}`;

  if (taxonomy) {
    condition = `after: "${endCursor}", first: 10, where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
  }

  const query = {
    query: `query getAllPosts {
            posts(${condition}) {
              nodes {
                date
                slug
                title
                excerpt(format: RENDERED)
                featuredImage {
                  node {
                    mediaDetails {
                      file
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts;

  return allPosts;
}

export async function getSinglePost(slug) {
  const query = {
    query: `query getSinglePost {
            post(id: "${slug}", idType: SLUG) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              modified
              slug
              title(format: RENDERED)
              databaseId
              featuredImage {
                node {
                  mediaDetails {
                    file
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.post;

  return singlePost;
}

export async function getPostSlugs() {
  const allSlugs = [];
  let endCursor = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const query = {
      query: `query getPostSlugs($endCursor: String) {
        posts(first: 100, after: $endCursor) {
          nodes {
            slug
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }`,
      variables: {
        endCursor,
      },
    };

    const resJson = await graphqlRequest(query);
    const postsData = resJson.data.posts;
    const slugs = postsData.nodes;

    allSlugs.push(...slugs);

    endCursor = postsData.pageInfo.endCursor;
    hasNextPage = postsData.pageInfo.hasNextPage;
  }

  return allSlugs;
}

export async function getCategorySlugs() {
  const query = {
    query: `query getCatetorySlugs {
      categories {
        nodes {
          slug
        }
      }
    }`
  };

  const resJson = await graphqlRequest(query);
  const categories = resJson.data.categories.nodes;

  return categories;
}

export async function getCategoryDetails(categoryName) {
  const query = {
    query: `query getCategoryDetails {
      category(id: "${categoryName}", idType: SLUG) {
        count
        name
        slug
      }
    }`
  };

  const resJson = await graphqlRequest(query);
  const categoryDetails = resJson.data.category;

  return categoryDetails;
}