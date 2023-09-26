import graphqlRequest from "@/lib/graphqlRequest";

export async function getSeo(pageType = 'post', slug = '/') {
    const query = {
        query: `query getSeo {
            ${pageType}(id: "${slug}", idType: SLUG) {
              seo {
              
                opengraphModifiedTime
                opengraphPublishedTime
                opengraphTitle
                opengraphType
                opengraphUrl
                schema {
                  raw
                }
                title
                metaDesc
                opengraphSiteName
                readingTime
                opengraphPublisher
              }
            }
          }`
    };

    const getSeo = await graphqlRequest(query);
    const seoData = getSeo.data;

    console.log('seodata...');
    // console.log(seoData.opengraphImage.mediaItemUrl);

    return seoData;
}