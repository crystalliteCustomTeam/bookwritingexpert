import React from 'react'
import { useRouter } from 'next/router';
import Head from "next/head";

const Metas = () => {

    const router = useRouter();
    const newpath = router.asPath;



    // schma


    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/",
        },
        headline: "Book Writing Company",
        description: "book writing company",
        image:
            "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        author: {
            "@type": "Organization",
            name: "book writing company",
            url: "https://www.bookwritingexperts.com/",
        },
        publisher: {
            "@type": "Organization",
            name: "book writing company",
            logo: {
                "@type": "ImageObject",
                url: "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
            },
        },
        datePublished: "",
    };

    const schemacon = {

        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "bookwritingexperts",
        "alternateName": "Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/contact-us/",
        "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
        "sameAs": [
            "https://www.bookwritingexperts.com/",
            "https://www.facebook.com/bookwritingexperts",
            "https://twitter.com/bookwritingexp",
            "https://www.instagram.com/bookwritingexpert/",
            "https://www.linkedin.com/company/book-writing-exp/",
            "https://www.pinterest.com/bookwritingexperts/"
        ]


    }
    const schemacon1 = {

        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "bookwritingexperts",
        "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
        "@id": "",
        "url": "https://www.bookwritingexperts.com/contact-us/",
        "telephone": "2132893888",
        "priceRange": "$99",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S Figueroa St",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0536155,
            "longitude": -118.2568651
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.bookwritingexperts.com/",
            "https://www.facebook.com/bookwritingexperts",
            "https://twitter.com/bookwritingexp",
            "https://www.instagram.com/bookwritingexpert/",
            "https://www.linkedin.com/company/book-writing-exp/",
            "https://www.pinterest.com/bookwritingexperts/"
        ]

    }


    const schemapri = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "bookwritingexperts",
        "alternateName": "Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/pricing/",
        "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
        "sameAs": [
            "https://www.bookwritingexperts.com/",
            "https://www.facebook.com/bookwritingexperts",
            "https://twitter.com/bookwritingexp",
            "https://www.instagram.com/bookwritingexpert/",
            "https://www.linkedin.com/company/book-writing-exp/",
            "https://www.pinterest.com/bookwritingexperts/"
        ]
    }
    const schema1pri = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "bookwritingexperts",
        "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
        "@id": "",
        "url": "https://www.bookwritingexperts.com/pricing/",
        "telephone": "2132893888",
        "priceRange": "$99",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S Figueroa St",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0536155,
            "longitude": -118.2568651
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.bookwritingexperts.com/",
            "https://www.facebook.com/bookwritingexperts",
            "https://twitter.com/bookwritingexp",
            "https://www.instagram.com/bookwritingexpert/",
            "https://www.linkedin.com/company/book-writing-exp/",
            "https://www.pinterest.com/bookwritingexperts/"
        ]
    }




    const schemapub = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/book-publishing-services"
        },
        "headline": "Book Publishing Services",
        "description": "book publishing services, amazon publishing services, amazon book publishing services, amazon kdp, kindle direct publishing services, amazon kdp publishers, book publishing company, best book publishing services, professional book publishing services, top book publishing services, best book publishing company, top book publishing company, leading book publishing company, top amazon publishers, amazon publishers",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "book publishing services, amazon publishing services, amazon book publishing services, amazon kdp, kindle direct publishing services, amazon kdp publishers, book publishing company, best book publishing services, professional book publishing services, top book publishing services, best book publishing company, top book publishing company, leading book publishing company, top amazon publishers, amazon publishers",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "book publishing services, amazon publishing services, amazon book publishing services, amazon kdp, kindle direct publishing services, amazon kdp publishers, book publishing company, best book publishing services, professional book publishing services, top book publishing services, best book publishing company, top book publishing company, leading book publishing company, top amazon publishers, amazon publishers",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }



    const schemapro = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/book-promotion-services"
        },
        "headline": "Book Promotion Services",
        "description": "book promotion services, book promotion company, best book promotion services, top book promotion services, professional book promotion services, best book promotion company, top book promotion company, leading book promotion company",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "book promotion services, book promotion company, best book promotion services, top book promotion services, professional book promotion services, best book promotion company, top book promotion company, leading book promotion company",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "book promotion services, book promotion company, best book promotion services, top book promotion services, professional book promotion services, best book promotion company, top book promotion company, leading book promotion company",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }



    const schemawr = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/book-writing-services"
        },
        "headline": "Book Writing Services",
        "description": "book writing services, book writing service, best book writing services, book writers, best book writers, top book writing services, top book writers, book writers for hire, hire book writers, professional book writing services, leading book writing services",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "book writing services, book writing service, best book writing services, book writers, best book writers, top book writing services, top book writers, book writers for hire, hire book writers, professional book writing services, leading book writing services",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "book writing services, book writing service, best book writing services, book writers, best book writers, top book writing services, top book writers, book writers for hire, hire book writers, professional book writing services, leading book writing services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }



    const schemaser = {


        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/book-editing-services"
        },
        "headline": "Book Editing Services",
        "description": "book editing services, book editing service, book editing company, book editor, book editors, best book editing services, best book editors, top book editing service, professional book editing services",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "book editing services, book editing service, book editing company, book editor, book editors, best book editing services, best book editors, top book editing service, professional book editing services",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "book editing services, book editing service, book editing company, book editor, book editors, best book editing services, best book editors, top book editing service, professional book editing services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""


    }


    const schemabus = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/business-plan-writing-services"
        },
        "headline": "Business Plan Writing Services",
        "description": "business plan writing services, business plan writing service, business plan writing company, business plan writers, business plan writer, best business plan writing services, professional business plan writing services, top business plan writing services",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "business plan writing services, business plan writing service, business plan writing company, business plan writers, business plan writer, best business plan writing services, professional business plan writing services, top business plan writing services",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "business plan writing services, business plan writing service, business plan writing company, business plan writers, business plan writer, best business plan writing services, professional business plan writing services, top business plan writing services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }



    const schemagost = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/ghostwriting-services"
        },
        "headline": "Ghostwriting Services",
        "description": "ghostwriting services, ghostwriting service, ghostwriting company, ghost book writers, ghost writing services, ghostwriters for hire, book ghostwriters, ghost writing service, best ghostwriting services, professional ghostwriting services",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "ghostwriting services, ghostwriting service, ghostwriting company, ghost book writers, ghost writing services, ghostwriters for hire, book ghostwriters, ghost writing service, best ghostwriting services, professional ghostwriting services",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "ghostwriting services, ghostwriting service, ghostwriting company, ghost book writers, ghost writing services, ghostwriters for hire, book ghostwriters, ghost writing service, best ghostwriting services, professional ghostwriting services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }


    const schemaweb = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/web-content-writing-services"
        },
        "headline": "Web Content Writing Services",
        "description": "web content writing services, web content writing service, web content writers, web content writing company, best web content writing services, top web content writing services, professional web content writing services",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "web content writing services, web content writing service, web content writers, web content writing company, best web content writing services, top web content writing services, professional web content writing services",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "web content writing services, web content writing service, web content writers, web content writing company, best web content writing services, top web content writing services, professional web content writing services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }


    const schemaproof = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/book-proofreading-services"
        },
        "headline": "Book Proofreading Services",
        "description": "book proofreading services, book proofreading service, book proofreading company, best book proofreading services, book proofreaders, top book proofreading services, leading book proofreading services, professional book proofreading company",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "book proofreading services, book proofreading service, book proofreading company, best book proofreading services, book proofreaders, top book proofreading services, leading book proofreading services, professional book proofreading company",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "book proofreading services, book proofreading service, book proofreading company, best book proofreading services, book proofreaders, top book proofreading services, leading book proofreading services, professional book proofreading company",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }

    const schemabms = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/book-marketing-services"
        },
        "headline": "Book Marketing Services",
        "description": "book marketing services, book marketing company, best book marketing services, professional book marketing services, top book marketing services, best book marketing company, professional book marketing company top book marketing company, book marketing agency, leading book marketing agency, top book marketing agency, best book marketing agency",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "book marketing services, book marketing company, best book marketing services, professional book marketing services, top book marketing services, best book marketing company, professional book marketing company top book marketing company, book marketing agency, leading book marketing agency, top book marketing agency, best book marketing agency",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "book marketing services, book marketing company, best book marketing services, professional book marketing services, top book marketing services, best book marketing company, professional book marketing company top book marketing company, book marketing agency, leading book marketing agency, top book marketing agency, best book marketing agency",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }


    const schemadms = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/digital-marketing-services"
        },
        "headline": "Digital Marketing Services",
        "description": "digital book marketing services, digital book marketing service, digital book marketing company, digital marketing services, best digital book marketing services, top digital marketing services",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "digital book marketing services, digital book marketing service, digital book marketing company, digital marketing services, best digital book marketing services, top digital marketing services",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "digital book marketing services, digital book marketing service, digital book marketing company, digital marketing services, best digital book marketing services, top digital marketing services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }



    const schemabts = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/book-trailer-services"
        },
        "headline": "Book Trailer Services",
        "description": "book trailer services, book trailer service, book trailer company, best book trailer services, top book trailer services, professional book trailer services",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "book trailer services, book trailer service, book trailer company, best book trailer services, top book trailer services, professional book trailer services",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "book trailer services, book trailer service, book trailer company, best book trailer services, top book trailer services, professional book trailer services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }


    const schemaebrs = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/ebook-writing-services"
        },
        "headline": "Ebook Writing Services",
        "description": "ebook writing services, ebook writing company, best ebook writing services, top ebook writing services, professional ebook writing services, leading ebook writing services, best ebook writing company, professional ebook writing company, top ebook writing company",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "ebook writing services, ebook writing company, best ebook writing services, top ebook writing services, professional ebook writing services, leading ebook writing services, best ebook writing company, professional ebook writing company, top ebook writing company",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "ebook writing services, ebook writing company, best ebook writing services, top ebook writing services, professional ebook writing services, leading ebook writing services, best ebook writing company, professional ebook writing company, top ebook writing company",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }


    const schemabpost = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/book-formatting-services"
        },
        "headline": "Book Formatting Services",
        "description": "book formatting services, book formatting service, book formatting company, best book formatting services, top book formatting services, professional book formatting services, book formatting",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "book formatting services, book formatting service, book formatting company, best book formatting services, top book formatting services, professional book formatting services, book formatting",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "book formatting services, book formatting service, book formatting company, best book formatting services, top book formatting services, professional book formatting services, book formatting",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }


    const schemaiil = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.bookwritingexperts.com/illustration"
        },
        "headline": "Book Illustration Services",
        "description": "book illustration services, book illustration service, book illustration company, leading book illustration services, top book illustration services, professional book illustration services",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "author": {
            "@type": "Organization",
            "name": "book illustration services, book illustration service, book illustration company, leading book illustration services, top book illustration services, professional book illustration services",
            "url": "https://www.bookwritingexperts.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "book illustration services, book illustration service, book illustration company, leading book illustration services, top book illustration services, professional book illustration services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
            }
        },
        "datePublished": ""
    }

    const schemambsp = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/audio-book-recording-services",
        },
        headline: "Audiobook Recording Services",
        description:
          "audiobook recording services, audiobook recording service, audiobook recording company, best audiobook recording services, top audiobook recording services",
        image:
          "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        author: {
          "@type": "Organization",
          name: "audiobook recording services, audiobook recording service, audiobook recording company, best audiobook recording services, top audiobook recording services",
          url: "https://www.bookwritingexperts.com/",
        },
        publisher: {
          "@type": "Organization",
          name: "audiobook recording services, audiobook recording service, audiobook recording company, best audiobook recording services, top audiobook recording services",
          logo: {
            "@type": "ImageObject",
            url: "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
          },
        },
        datePublished: "",
      };


    const schemambspdlp = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/5-ways-to-promote-your-book-on-amazon/"
        },
        "headline": "Ways To Promote Your Book On Amazon",
        "description": "ways to promote your book on amazon, amazon book promotion, promote you book on amazon, book promotion on amazon",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "ways to promote your book on amazon, amazon book promotion, promote you book on amazon, book promotion on amazon",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "ways to promote your book on amazon, amazon book promotion, promote you book on amazon, book promotion on amazon",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };


    const schemambspdlp2 = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/an-overview-of-amazon-publisher-services/"
        },
        "headline": "Overview Of Amazon Publisher Services",
        "description": "amazon publisher services, overview of amazon publisher services, what is amazon publisher services",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "amazon publisher services, overview of amazon publisher services, what is amazon publisher services",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "amazon publisher services, overview of amazon publisher services, what is amazon publisher services",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };


    const schemambspdlp3 = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/how-to-hire-the-best-book-publisher/"
        },
        "headline": "How To Hire The Best Book Publisher",
        "description": "how to hire the best book publisher, hire the best book publisher, book publisher for hire, book publishers, best book publishers",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "how to hire the best book publisher, hire the best book publisher, book publisher for hire, book publishers, best book publishers",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "how to hire the best book publisher, hire the best book publisher, book publisher for hire, book publishers, best book publishers",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };
    const schemambspdlp4 = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/how-much-does-it-cost-to-publish-a-book-in-2024/"
        },
        "headline": "Book Publishing Cost",
        "description": "how much does it cost to publish a book, book publishing cost, book publishing costs, cost to publish a book, publish a book on amazon, book publishing",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "how much does it cost to publish a book, book publishing cost, book publishing costs, cost to publish a book, publish a book on amazon, book publishing",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "how much does it cost to publish a book, book publishing cost, book publishing costs, cost to publish a book, publish a book on amazon, book publishing",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };
    const schemambspdlp5 ={
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/how-does-book-publishing-process-works/"
        },
        "headline": "Book Publishing Process",
        "description": "how does the book publishing process works, process of publishing a book, book publishing process, amazon book publishing process, amazon book publishing",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "how does a book publishing process works, process of publishing a book, book publishing process, amazon book publishing process, amazon book publishing",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "how does a book publishing process works, process of publishing a book, book publishing process, amazon book publishing process, amazon book publishing",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };
    const schemambspdlp6 = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/how-much-does-book-editing-cost/"
        },
        "headline": "Book Editing Cost",
        "description": "how much does book editing cost, book editing cost, book editing costs, cost of book editing, cost of editing a book",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "how much does book editing cost, book editing cost, book editing costs, cost of book editing, cost of editing a book",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "how much does book editing cost, book editing cost, book editing costs, cost of book editing, cost of editing a book",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };
    const schemambspdlp7 = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/how-much-does-it-costs-to-market-a-book/"
        },
        "headline": "How Much Does It Costs To Market A Book",
        "description": "cost of marketing a book, book marketing cost, how much does it cost to marketing a book, book marketing services cost",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "cost of marketing a book, book marketing cost, how much does it cost to marketing a book, book marketing services cost",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "cost of marketing a book, book marketing cost, how much does it cost to marketing a book, book marketing services cost",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };
    const schemambspdlp8 = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/how-to-promote-a-book-online/"
        },
        "headline": "How To Promote A Book Online",
        "description": "how to promote a book online, promote a book online, online book promotion, book promotion services, book promotion company",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "how to promote a book online, promote a book online, online book promotion, book promotion services, book promotion company",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "how to promote a book online, promote a book online, online book promotion, book promotion services, book promotion company",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };
    const schemambspdlp9 = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/how-to-sell-more-books-on-amazon-kdp/"
        },
        "headline": "How To Sell More Books On Amazon KDP",
        "description": "how to sell more books on amazon kdp, ways to sell books on amazon kdp, selling more books on amazon kdp, selling books on amazon kdp",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "how to sell more books on amazon kdp, ways to sell books on amazon kdp, selling more books on amazon kdp, selling books on amazon kdp",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "how to sell more books on amazon kdp, ways to sell books on amazon kdp, selling more books on amazon kdp, selling books on amazon kdp",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };
    const schemambspdlp10 = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.bookwritingexperts.com/how-to-increase-book-sales-on-kindle-direct-publishing/"
        },
        "headline": "Increase Book Sales On Kindle Direct Publishing",
        "description": "how to increase book sales on KDP, increase book sales on kindle direct publishing, increase book sales KDP",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
        "author": {
          "@type": "Organization",
          "name": "how to increase book sales on KDP, increase book sales on kindle direct publishing, increase book sales KDP",
          "url": "https://www.bookwritingexperts.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "how to increase book sales on KDP, increase book sales on kindle direct publishing, increase book sales KDP",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
          }
        },
        "datePublished": ""
      };



    return (
        <>


            {newpath === '/alberta-amazon-kdp' ? (
                <Head>
                    <title key="title">Alberta Amazon KDP: Your Gateway to Global Publishing</title>
                    <meta name="description" content='Dive into global publishing from home. Discover how with our Alberta Amazon KDP guide. Read now!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/oregon-book-publishers' ? (
                <Head>
                    <title key="title">How Oregon Book Publishers Are Leading The Book Publishing Industry</title>
                    <meta name="description" content='Discover how Oregon publishers are taking the lead. Click to read this blog and contact us today to start your book publishing journey' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/hire-ebook-writing-services-usa' ? (
                <Head>
                    <title key="title">Why Ebook Writing Services USA Are the Best Investment for First Time Authors</title>
                    <meta name="description" content='Explore why USAs ebook writing services are the ultimate choice for emerging authors. Contact us today!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/amazon-self-publishing' ? (
                <Head>
                    <title key="title">Amazon Self Publishing: 5 Proven Steps For First Time Authors</title>
                    <meta name="description" content='Discover the 5 essential steps for successful Amazon self publishing. A beginners guide to achieve your publishing dreams on the worlds largest platform' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/hire-affordable-fiction-ghostwriting-services' ? (
                <Head>
                    <title key="title">7 Benefits of Hiring Affordable Fiction Ghostwriting Services</title>
                    <meta name="description" content='Learn the 7 advantages of choosing affordable fiction ghostwriting services. Connect with us today!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/the-benefits-of-hiring-a-book-marketing-company' ? (
                <Head>
                    <title key="title">Why Do You Need A Book Marketing Company and How Can It Help Drive Book Sales</title>
                    <meta name="description" content='Discover why authors should consider hiring a professional book marketing company. Contact us today to increase your book sales today!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/6-proven-strategies-for-marketing-a-book' ? (
                <Head>
                    <title key="title">The Art Of Marketing A Book: 6 Proven Strategies For Successful Book Marketing</title>
                    <meta name="description" content='Learn author success with these 6 proven strategies for marketing a book. Call us to learn more!' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/5-common-mistakes-to-avoid-while-publishing-on-amazon-kdp' ? (
                <Head>
                    <title key="title">5 Common Mistakes To Avoid While Publishing A Book On Amazon KDP</title>
                    <meta name="description" content='Learn how to become a successful author with amazon kdp by avoiding these common book publishing mistakes. Contact us today to get the best amazon kdp services.' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/how-much-does-it-cost-to-self-publish-a-book' ? (
                <Head>
                    <title key="title">How Much Does It Cost To Self Publish A Book</title>
                    <meta name="description" content='Learn the expenses involved while authors self publish a book. Learn about editing, design, distribution, and marketing costs for your author journey.' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/10-strategies-for-marketing-a-book' ? (
                <Head>
                    <title key="title">10 Strategies Every Author Should Know Before Marketing A Book</title>
                    <meta name="description" content='This blog will help discover ten strategies for marketing a book. Increase visibility, engage readers, and achieve literary success.' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/5-reasons-to-build-author-platform-for-marketing-a-book' ? (
                <Head>
                    <title key="title">5 Reasons Why You Need To Build A Lasting Author Platform For Marketing A Book</title>
                    <meta name="description" content='Discover why an enduring author platform is important for marketing a book. Learn how it boosts visibility, credibility, and reader engagement' key="metadesc" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/' ? (
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta
                        name="robots"
                        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                    />
                    <title>Professional Book Writing Services Company</title>
                    <meta
                        name="description"
                        content="Book Writing Services that transform your ideas to the best-selling book. Call us if you need help writing a book or penning down your thoughts."
                    />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:title"
                        content="Professional Book Writing Services Company"
                    />
                    <meta
                        property="og:description"
                        content="Book Writing Services that transform your ideas to the best-selling book. Call us if you need help writing a book or penning down your thoughts."
                    />
                    <meta property="og:url" content="https://www.bookwritingexperts.com/" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta
                        property="article:modified_time"
                        content="2023-01-12T00:00:46+00:00"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="13 minutes" />
                    <link rel="icon" href="/favicon.svg" />
                    <meta name="DC.title" content="book writing company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                </Head>
            ) : newpath === '/contact' ? (
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                    <title>Contact Us - Book Writing</title>
                    <meta name="description"
                        content="Contact us and let us define the success of your book with our various book related solutions. We are 24/7 all ears to your needs." />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Contact Us - Book Writing" />
                    <meta property="og:description"
                        content="Contact us and let us define the success of your book with our various book related solutions. We are 24/7 all ears to your needs." />
                    <meta property="og:url" content="/contact" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2022-08-31T23:04:58+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="4 minutes" />
                    <link rel="icon" href="/favicon.svg" />



                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemacon) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemacon1) }}
                    />

                </Head>
            ) : newpath === '/blog' ? (
                <Head>
                    <title>Blogs - Book Writing Experts</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/ourportfolio' ? (

                <Head>
                    <title>Our Portfolio</title>
                    <link rel="icon" href="/favicon.svg" />
                </Head>
            ) : newpath === '/pricing' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                    <title>Pricing - Book Writing Experts</title>
                    <meta name="description"
                        content="Ghostwriting packages that are affordable and designed keeping in mind your budget constraints. Give us a call and let the magic of words happen." />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Pricing - Book Writing Experts" />
                    <meta property="og:description"
                        content="Ghostwriting packages that are affordable and designed keeping in mind your budget constraints. Give us a call and let the magic of words happen." />
                    <meta property="og:url" content="/pricing" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2022-08-31T23:03:08+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="4 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemapri) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1pri) }}
                    />
                </Head>
            ) : newpath === '/book-publishing-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Get Your Book on Amazon KDP with Top-Rated Book Publishing Services</title>
                    <meta name="description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Get Your Book on Amazon KDP with Top-Rated Book Publishing Services" />
                    <meta property="og:description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />
                    <meta property="og:url" content="/book-publishing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T12:04:48+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="9 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="book publishing services, amazon publishing services, amazon kdp, book publishing company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />



                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemapub) }}
                    />

                </Head>
            ) : newpath === '/book-promotion-services' ? (

                <Head>

                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Book Promotion Services For Branding - Book Writing Experts</title>
                    <meta name="description" content="Book Promotion Services to leave your competitors in the dust. We know the science of sales and art of marketing your books, hire us today." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Book Promotion Services For Branding - Book Writing Experts" />
                    <meta property="og:description" content="Book Promotion Services to leave your competitors in the dust. We know the science of sales and art of marketing your books, hire us today." />
                    <meta property="og:url" content="/book-promotion-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T11:38:52+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="7 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="book promotion services, book promotion service, book promotion company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemapro) }}
                    />


                </Head>
            ) : newpath === '/book-promotion-services' ? (

                <Head>

                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Book Promotion Services For Branding - Book Writing Experts</title>
                    <meta name="description" content="Book Promotion Services to leave your competitors in the dust. We know the science of sales and art of marketing your books, hire us today." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Book Promotion Services For Branding - Book Writing Experts" />
                    <meta property="og:description" content="Book Promotion Services to leave your competitors in the dust. We know the science of sales and art of marketing your books, hire us today." />
                    <meta property="og:url" content="/book-promotion-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T11:38:52+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="7 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="book promotion services, book promotion service, book promotion company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemapro) }}
                    />


                </Head>
            ) : newpath === '/book-writing-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />
                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Professional Book Writing Services - Book Writing Experts</title>
                    <meta name="description" content="Book Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Professional Book Writing Services - Book Writing Experts" />
                    <meta property="og:description" content="Book Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />
                    <meta property="og:url" content="/book-writing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T12:00:32+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="6 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="book writing services, book writing service, book writing company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />


                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemawr) }}
                    />
                </Head>


            ) : newpath === '/book-editing-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Professional Book Editing Services - Book Writing Experts</title>
                    <meta name="description" content="Book editing services that fixes the writing flaws and make your book a flawless piece of content. Hire us today to get them at affordable pricing." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Professional Book Editing Services - Book Writing Experts" />
                    <meta property="og:description" content="Book editing services that fixes the writing flaws and make your book a flawless piece of content. Hire us today to get them at affordable pricing." />
                    <meta property="og:url" content="/book-editing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T12:01:27+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="9 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="book editing services, book editing service, book editing company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaser) }}
                    />


                </Head>
            ) : newpath === '/business-plan-writing-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />
                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Business Plan Writing Services - Book Writing Experts</title>
                    <meta name="description" content="Business Plan Writing Services offered by Book Writing Experts ensure to turn your dream into a successfully launched and hit business. Call us now." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Business Plan Writing Services - Book Writing Experts" />
                    <meta property="og:description" content="Business Plan Writing Services offered by Book Writing Experts ensure to turn your dream into a successfully launched and hit business. Call us now." />
                    <meta property="og:url" content="/business-plan-writing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T12:00:32+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="6 minutes" />
                    <link rel="icon" href="/favicon.svg" />
                    <meta name="DC.title" content="business plan writing services, business plan writing service, business plan writing company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemabus) }}
                    />



                </Head>

            ) : newpath === '/ghostwriting-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Top-Tier Ghostwriting Services - Book Writing Experts</title>
                    <meta name="description" content="Ghostwriting services that help aspiring authors launch into success. Get them today, as they are affordable and executed to perfection." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Top-Tier Ghostwriting Services - Book Writing Experts" />
                    <meta property="og:description" content="Ghostwriting services that help aspiring authors launch into success. Get them today, as they are affordable and executed to perfection." />
                    <meta property="og:url" content="https://www.bookwritingexperts.com/ghostwriting-services/" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T12:03:02+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="9 minutes" />
                    <link rel="icon" href="/favicon.svg" />
                    <meta name="DC.title" content="ghostwriting services, ghost writing services, ghostwriting company, ghost book writers" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemagost) }}
                    />


                </Head>
            ) : newpath === '/web-content-writing-services' ? (
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />
                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Web Content Writing Service - Book Writing Experts</title>
                    <meta name="description" content="Web Content Writing Service to help you create a striking impression on your ideal audience. Get in touch with our seasoned writers." />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Web Content Writing Service - Book Writing Experts" />
                    <meta property="og:description" content="Web Content Writing Service to help you create a striking impression on your ideal audience. Get in touch with our seasoned writers." />
                    <meta property="og:url" content="/book-writing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T12:00:32+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="6 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="web content writing services, web content writing service, web content writing company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />


                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaweb) }}
                    />


                </Head>
            ) : newpath === '/book-proofreading-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Best Book Proofreading Services - Book Writing Experts</title>
                    <meta name="description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Best Book Proofreading Services - Book Writing Experts" />
                    <meta property="og:description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />
                    <meta property="og:url" content="/book-proofreading-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T12:03:57+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="9 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="book proofreading services, book proofreading service, book proofreading company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaproof) }}
                    />
                </Head>
            ) : newpath === '/book-marketing-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Professional Book Marketing Services - Book Writing Experts</title>
                    <meta name="description" content="Book Marketing Services that makes you your readers&#039; most sought-after choice. Count on us to be counted worldwide. Hire us to get the job done." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Professional Book Marketing Services - Book Writing Experts" />
                    <meta property="og:description" content="Book Marketing Services that makes you your readers&#039; most sought-after choice. Count on us to be counted worldwide. Hire us to get the job done." />
                    <meta property="og:url" content="/book-marketing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T11:37:31+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="7 minutes" />
                    <link rel="icon" href="/favicon.svg" />
                    <meta name="DC.title" content="book marketing services, book marketing company, book marketing agency" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemabms) }}
                    />



                </Head>
            ) : newpath === '/digital-marketing-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Top Tier Digital Marketing Services - Book Writing Experts</title>
                    <meta name="description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Top Tier Digital Marketing Services - Book Writing Experts" />
                    <meta property="og:description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />
                    <meta property="og:url" content="/digital-marketing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T11:58:56+00:00" />
                    <meta property="og:image" content="/complogo.png" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="45 minutes" />
                    <link rel="icon" href="/favicon.svg" />


                    <meta name="DC.title" content="digital marketing services, digital marketing service, digital marketing company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />


                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemadms) }}
                    />



                </Head>
            ) : newpath === '/book-trailer-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Impactful Book Trailer Services - Book Writing Experts</title>
                    <meta name="description" content="Book trailer services to make a lasting impression on your audience. Avail our services and stay ahead of your competitors." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Impactful Book Trailer Services - Book Writing Experts" />
                    <meta property="og:description" content="Book trailer services to make a lasting impression on your audience. Avail our services and stay ahead of your competitors." />
                    <meta property="og:url" content="/book-trailer-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T11:37:31+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="7 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="book trailer services, book trailer service, book trailer company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemabts) }}
                    />


                </Head>
            ) : newpath === '/ebook-writing-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />
                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Professional Ebook Writing Services - Book Writing Experts</title>
                    <meta name="description" content="Ebook Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Professional Ebook Writing Services - Book Writing Experts" />
                    <meta property="og:description" content="Ebook Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />
                    <meta property="og:url" content="/ebook-writing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T12:00:32+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="6 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="ebook writing services, ebook writing service, ebook writing company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />


                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaebrs) }}
                    />


                </Head>
            ) : newpath === '/book-formatting-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />
                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Book Formatting Services - Book Writing Experts</title>
                    <meta name="description" content="Book Formatting Services that meet the global formatting standards. Call the experts to get it done at affordable price range." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Book Formatting Services - Book Writing Experts" />
                    <meta property="og:description" content="Book Formatting Services that meet the global formatting standards. Call the experts to get it done at affordable price range." />
                    <meta property="og:url" content="/book-writing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-03-31T12:00:32+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="6 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta name="DC.title" content="book formatting services, book formatting service, book formatting company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemabpost) }}
                    />



                </Head>
            ) : newpath === '/illustration' ? (

                <Head>

                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Best Book Illustration Services - Book Writing Experts</title>
                    <meta name="description" content="Hire the best illustration services offered by us to creatively make your book look a professional one. Our illustration company can make the best illustrations for your book" />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Best Book Illustration Services - Book Writing Experts" />
                    <meta property="og:description" content="Hire the best illustration services offered by us to creatively make your book look a professional one. Our illustration company can make the best illustrations for your book" />
                    <meta property="og:url" content="https://www.bookwritingexperts.com/" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="13 minutes" />
                    <link rel="icon" href="/favicon.svg" />


                    <meta name="DC.title" content="book illustration services, book illustration service, book illustration company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaiil) }}
                    />

                    {/* <Schema /> */}

                </Head>
            ) : newpath === '/audiobookproduction' ? (
                <Head>

                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Top Audiobook Production Services - Book Writing Experts</title>
                    <meta name="description" content="Hire the best audiobook production services, we offer a simple and creative process so your audiobook can be heard worldwide. Contact our audiobook production company today!" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Top Audiobook Production Services - Book Writing Experts" />
                    <meta property="og:description" content="Hire the best audiobook production services, we offer a simple and creative process so your audiobook can be heard worldwide. Contact our audiobook production company today!" />
                    <meta property="og:url" content="https://www.bookwritingexperts.com/" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="13 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                </Head>
            ) : newpath === '/amazon-book-publishing-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta
                        name="robots"
                        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                    />
                    <meta name="robots" content="noindex" />
                    <title>
                        Get Your Book on Amazon KDP with Top-Rated Book Publishing Services
                    </title>
                    <meta
                        name="description"
                        content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!"
                    />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta
                        property="og:title"
                        content="Get Your Book on Amazon KDP with Top-Rated Book Publishing Services"
                    />
                    <meta
                        property="og:description"
                        content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!"
                    />
                    <meta property="og:url" content="/book-publishing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta
                        property="article:modified_time"
                        content="2023-03-31T12:04:48+00:00"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="9 minutes" />
                    <link rel="icon" href="/favicon.svg" />

                    <meta
                        name="DC.title"
                        content="audiobook recording services, audiobook recording service, audiobook recording company"
                    />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambsp) }}
                    />
                </Head>
            ) :  newpath === '/bookexperlp' ? (

                <Head>
                   
                   <link rel="icon" href="/favicon.svg" />
                    <title>
                        Book Wrinting Experts
                    </title>
                  

                  
                </Head>
            ) : newpath === '/5-ways-to-promote-your-book-on-amazon' ? (

                <Head>
                   
                   <link rel="icon" href="/favicon.svg" />
                   <title> 5 Effective Ways To Promote Your Book On Amazon </title>
                    <meta name="description" content="Take your book marketing to the next level with our proven ways to promote your book on Amazon. Market your book on the world's largest online platform."
                    />
                    <meta name="DC.title" content="promote your book on amazon, amazon book promotion, book promotion services" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp) }}
                    />
                  

                  
                </Head>
            ) : newpath === '/an-overview-of-amazon-publisher-services' ? (

                <Head>
                   
                   <link rel="icon" href="/favicon.svg" />
                   <title> A Comprehensive Overview of Amazon Publisher Services </title>
                    <meta name="description" content="Find out what Amazon Publisher Services is and what it comprises, including analytics and ad solutions. Learn more about how it can help your publishing efforts."
                    />
                    <meta name="DC.title" content="amazon publisher services, amazon publisher service, best amazon publisher services" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />


                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp2) }}
                    />
                  

                  
                </Head>
            ) : newpath === '/how-to-hire-the-best-book-publisher' ? (

                <Head>
                   <link rel="icon" href="/favicon.svg" />
                   <title> How to Hire the Best Book Publisher For Your Book </title>
                    <meta name="description" content="Are you ready to publish your book? Follow our professional guidance on how to hire the best book publisher and take your author career to new heights."
                    />
                    <meta name="DC.title" content="best book publisher, book publisher, book publishers" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp3) }}
                    />
                </Head>
            ) : newpath === '/how-much-does-it-cost-to-publish-a-book-in-2024' ? (

                <Head>
                   <link rel="icon" href="/favicon.svg" />
                   <title> How Much Does It Cost To Publish A Book In 2024? </title>
                    <meta name="description" content="Are you planning to publish your book? Find out how much book publishing services cost in 2024 to plan your budget accordingly."
                    />
                   <meta name="DC.title" content="cost of publishing a book, book publishing cost, amazon book publishing" />
                   <meta name="geo.region" content="US" />
                   <meta name="geo.position" content="39.78373;-100.445882" />
                   <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp4) }}
                    />
                </Head>
            ) : newpath === '/how-does-book-publishing-process-works' ? (

                <Head>
                   <link rel="icon" href="/favicon.svg" />
                   <title> How Does The Book Publishing Process Works? </title>
                    <meta name="description" content="Learn about the complexities of book publishing, from conception to release. Discover how the book publishing process works for both authors and publishers."
                    />
                   <meta name="DC.title" content="book publishing process, process of publishing a book, amazon book publishing process" />
                   <meta name="geo.region" content="US" />
                   <meta name="geo.position" content="39.78373;-100.445882" />
                   <meta name="ICBM" content="39.78373, -100.445882" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp5) }}
                    />
                </Head>
            ) : newpath === '/how-much-does-book-editing-cost' ? (

                <Head>
                   <link rel="icon" href="/favicon.svg" />
                   <title> How Much Does Book Editing Cost? </title>
                    <meta name="description" content="Find out how much book editing costs and ensure the attention your manuscript needs is given. Plan your budget wisely for publication success."
                    />
                   <meta name="DC.title" content="book editing cost, how much does book editing cost, cost of book editing" />
                   <meta name="geo.region" content="US" />
                   <meta name="geo.position" content="39.78373;-100.445882" />
                   <meta name="ICBM" content="39.78373, -100.445882" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp6) }}
                    />
                </Head>
            ) : newpath === '/how-much-does-it-costs-to-market-a-book' ? (

                <Head>
                   <link rel="icon" href="/favicon.svg" />
                   <title> How Much It Costs to Market a Book? </title>
                    <meta name="description" content="Get ahead in book marketing with our professional advice on successful budgeting. Get your answer to the question of how much it costs to market a book."
                    />
                    <meta name="DC.title" content="book marketing cost, cost of book marketing, how much does it cost to market a book" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp7) }}
                    />
                </Head>
            ) : newpath === '/how-to-promote-a-book-online' ? (

                <Head>
                   <link rel="icon" href="/favicon.svg" />
                   <title> How to Promote A Book Online Effectively </title>
                    <meta name="description" content="Find out how to promote a book online. Learn the most effective tactics to increase your literary masterpiece's visibility, reader engagement, and revenues."
                    />
                   <meta name="DC.title" content="how to promote a book online, book promotion online, book promotion services" />
                   <meta name="geo.region" content="US" />
                   <meta name="geo.position" content="39.78373;-100.445882" />
                   <meta name="ICBM" content="39.78373, -100.445882" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp8) }}
                    />
                </Head>
            ) : newpath === '/how-to-sell-more-books-on-amazon-kdp' ? (

                <Head>
                   <link rel="icon" href="/favicon.svg" />
                   <title> How to Sell More Books on Amazon KDP? </title>
                    <meta name="description" content="Learn about tried-and-true tactics and insider ideas on how to sell more books on Amazon KDP. Increase your author income and reach to the fullest now!"
                    />
                    <meta name="DC.title" content="how to sell more books on amazon kdp, amazon kdp, sell more books on kdp" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp9) }}
                    />
                </Head>
            ) : newpath === '/how-to-increase-book-sales-on-kindle-direct-publishing' ? (

                <Head>
                   <link rel="icon" href="/favicon.svg" />
                   <title> How to Increase Book Sales on Kindle Direct Publishing?</title>
                    <meta name="description" content="Find practical advice on how to increase book sales on Kindle Direct Publishing. Earn higher royalties by making your book the best-seller."
                    />
                    <meta name="DC.title" content="increase book sales on KDP, increase book sales on kindle direct publishing, kdp book sales" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemambspdlp10) }}
                    />
                </Head>
            ) :  null

            }

        </>
    )
}

export default Metas