import React from 'react'
import { useRouter } from 'next/router';
import Head from "next/head";

const Metas = () => {

    const router = useRouter();
    const newpath = router.asPath;



    // schma



    const schemaurl0 = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.bookwritingexperts.com/s={search_term_string}",
            "query-input": "required name=search_term_string"
        }

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
    const productSchemaEbookWritingServices = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Ebook Writing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "description": "Ebook Writing Services, Get your ebook written with our professional ebook writers in no time.",
        "brand": {
            "@type": "Brand",
            "name": "Book Writing Experts"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1174"
        }
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

    const productSchemaGhostWritingServices = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Ghostwriting Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "description": "Ghostwriting Services, Explore our ghostwriting services and get your book written from our leading ghostwriters.",
        "brand": {
            "@type": "Brand",
            "name": "Book Writing Experts"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1174"
        }
    }
    const productSchemaHome = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Book Writing Company | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "description": "Book Writing Company, The best book writing company for all types of books.",
        "brand": {
            "@type": "Brand",
            "name": "Book Writing Experts"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1174"
        }
    }
    const websiteSchemaHome = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaHome = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }

    const corporationSchemaHome = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }

    const productSchemaBookEditingServices = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Book Editing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "description": "Book Editing Services, Discover our wide range of book editing services. Hire our book editing company today.",
        "brand": {
            "@type": "Brand",
            "name": "Book Writing Experts"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1174"
        }
    }
    const productSchemaBookProofreadingServices = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Book Proofreading Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "description": "Book Proofreading Services, Hire our professional book proofreading company today and make your book error free.",
        "brand": {
            "@type": "Brand",
            "name": "Book Writing Experts"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1174"
        }
    }
    const productSchemaBookMarketingServices = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Book Marketing Services, Amazon Book Marketing | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "description": "Book Marketing Services, If you are struggling to market your book on amazon then hire our book marketing company today.",
        "brand": {
            "@type": "Brand",
            "name": "Book Writing Experts"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1174"
        }
    }
    const productSchemaBookPromotionServices = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Book Promotion Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "description": "Book Promotion Services, Promote your book on various platforms with our top-notch book promotion company.",
        "brand": {
            "@type": "Brand",
            "name": "Book Writing Experts"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1174"
        }
    }
    const productSchemaBookPublishingServices = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Book Publishing Services, Amazon Publishing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "description": "Book Publishing Services, Have your book published on amazon kdp with our leading book publishers.",
        "brand": {
            "@type": "Brand",
            "name": "Book Writing Experts"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1174"
        }
    }
    const productSchemaBookWritingServices = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Book Writing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "description": "Book Writing Services, Hire our book writers today and get your masterclass book written.",
        "brand": {
            "@type": "Brand",
            "name": "Book Writing Experts"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1174"
        }
    }
    const websiteSchemaBookWritingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-writing-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaBookWritingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Writing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/book-writing-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaBookWritingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-writing-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaBookTrailerServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Trailer Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-trailer-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaBookTrailerServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Trailer Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/book-trailer-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaBookTrailerServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Trailer Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-trailer-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const professionalServiceSchemaBusinessPlanWritingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Business Plan Writing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/business-plan-writing-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaBusinessPlanWritingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Business Plan Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/business-plan-writing-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaBusinessPlanWritingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Business Plan Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/business-plan-writing-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const websiteSchemaDigitalMarketingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Digital Marketing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/digital-marketing-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaDigitalMarketingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Digital Marketing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/digital-marketing-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaDigitalMarketingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Digital Marketing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/digital-marketing-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const professionalServiceSchemaEbookWritingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ebook Writing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/ebook-writing-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaEbookWritingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Ebook Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/ebook-writing-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaEbookWritingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Ebook Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/ebook-writing-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const websiteSchemaGhostWritingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Ghostwriting Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/ghostwriting-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaGhostWritingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ghostwriting Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/ghostwriting-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }

    const corporationSchemaGhostWritingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Ghostwriting Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/ghostwriting-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemawebContentWritingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Web Content Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/web-content-writing-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemawebContentWritingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Web Content Writing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/web-content-writing-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemawebContentWritingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Web Content Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/web-content-writing-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaArticleWritingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Article Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/article-writing-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaArticleWritingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Article Writing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/article-writing-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaArticleWritingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Article Writing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/article-writing-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaBookEditingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Editing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-editing-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaBookEditingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Editing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/book-editing-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaBookEditingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Editing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-editing-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaBookFormattingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Formatting Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-formatting-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaBookFormattingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Formatting Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/book-formatting-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaBookFormattingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Formatting Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-formatting-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaIllustration = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Illustration Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/illustration",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaIllustration = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Illustration Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/illustration",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaIllustration = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Illustration Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/illustration",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }

    const websiteSchemaBookMarketingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Marketing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-marketing-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaBookMarketingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Marketing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/book-marketing-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaBookMarketingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Marketing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-marketing-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaBookPromotionServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Promotion Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-promotion-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaBookPromotionServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Promotion Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/book-promotion-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaBookPromotionServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Promotion Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-promotion-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaBookProofreadingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Proofreading Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-proofreading-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaBookProofreadingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Proofreading Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/book-proofreading-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }
    const corporationSchemaBookProofreadingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Proofreading Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-proofreading-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
    const websiteSchemaBookPublishingServices = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Book Publishing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-publishing-services",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    const professionalServiceSchemaBookPublishingServices = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Book Publishing Services | Book Writing Experts",
        "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
        "url": "https://www.bookwritingexperts.com/book-publishing-services",
        "telephone": "855-500-0057",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "445 S.Figueroa Street",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90071",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0533717,
            "longitude": -118.2573536
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    }

    const corporationSchemaBookPublishingServices = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Book Publishing Services | Book Writing Experts",
        "url": "https://www.bookwritingexperts.com/book-publishing-services",
        "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
    }
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
    const schemambspdlp5 = {
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />

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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaHome) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaHome) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaHome) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaHome) }}
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
                    <meta name="description" content="Are you looking for a book publishing company? Hire Book Writing Experts today, as we are the leading Amazon KDP and Amazon publishing service." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Get Your Book on Amazon KDP with Top-Rated Book Publishing Services" />
                    <meta property="og:description" content="Are you looking for a book publishing company? Hire Book Writing Experts today, as we are the leading Amazon KDP and Amazon publishing service." />
                    <meta property="og:url" content="/book-publishing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaBookPublishingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBookPublishingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBookPublishingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBookPublishingServices) }}
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaBookPromotionServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBookPromotionServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBookPromotionServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBookPromotionServices) }}
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaBookWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBookWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBookWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBookWritingServices) }}
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaBookEditingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBookEditingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBookEditingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBookEditingServices) }}
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBusinessPlanWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBusinessPlanWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBusinessPlanWritingServices) }}
                    />


                </Head>

            ) : newpath === '/ghostwriting-services' ? (

                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                    
                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='noindex, nofollow' />
                    <title>Top-Tier Ghostwriting Services - Book Writing Experts</title>
                    <meta name="description" content="Ghostwriting services that help aspiring authors launch into success. Get them today, as they are affordable and executed to perfection." />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Top-Tier Ghostwriting Services - Book Writing Experts" />
                    <meta property="og:description" content="Ghostwriting services that help aspiring authors launch into success. Get them today, as they are affordable and executed to perfection." />
                    <meta property="og:url" content="https://www.bookwritingexperts.com/ghostwriting-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaGhostWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaGhostWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaGhostWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaGhostWritingServices) }}
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
                    <meta property="og:url" content="/web-content-writing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemawebContentWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemawebContentWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemawebContentWritingServices) }}
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaBookProofreadingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBookProofreadingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBookProofreadingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBookProofreadingServices) }}
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaBookMarketingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBookMarketingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBookMarketingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBookMarketingServices) }}
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
                    <meta property="article:modified_time" content="2023-03-31T11:58:56+00:00" />
                    {/* <meta property="og:image" content="/complogo.png" /> */}
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaDigitalMarketingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaDigitalMarketingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaDigitalMarketingServices) }}
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBookTrailerServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBookTrailerServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBookTrailerServices) }}
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
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaEbookWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaEbookWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaEbookWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaEbookWritingServices) }}
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
                    <meta property="og:url" content="/book-formatting-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBookFormattingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBookFormattingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBookFormattingServices) }}
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
                    <meta name="description" content="Get the best book illustrations for your book by hiring the best book illustration services. Contact us now!" />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Best Book Illustration Services - Book Writing Experts" />
                    <meta property="og:description" content="Get the best book illustrations for your book by hiring the best book illustration services. Contact us now!" />
                    <meta property="og:url" content="https://www.bookwritingexperts.com/illustration" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
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
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaIllustration) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaIllustration) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaIllustration) }}
                    />

                </Head>
            ) : newpath === '/article-writing-services' ? (

                <Head>

                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                    <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                    <link rel="profile" href="http://gmpg.org/xfn/11" />

                    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                    <title>Best Article Writing Services - Book Writing Experts</title>
                    <meta name="description" content="Hire the best illustration services offered by us to creatively make your book look a professional one. Our illustration company can make the best illustrations for your book" />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Best Book Illustration Services - Book Writing Experts" />
                    <meta property="og:description" content="Hire the best illustration services offered by us to creatively make your book look a professional one. Our illustration company can make the best illustrations for your book" />
                    <meta property="og:url" content="https://www.bookwritingexperts.com/article-writing-services" />
                    <meta property="og:site_name" content="Book Writing" />
                    <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
                    <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="13 minutes" />
                    <link rel="icon" href="/favicon.svg" />


                    <meta name="DC.title" content="article writing services, article writing service, article writing company" />
                    <meta name="geo.region" content="US" />
                    <meta name="geo.position" content="39.78373;-100.445882" />
                    <meta name="ICBM" content="39.78373, -100.445882" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaArticleWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaArticleWritingServices) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaArticleWritingServices) }}
                    />

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
                    <meta property="og:url" content="https://www.bookwritingexperts.com/audiobookproduction" />
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
                </Head>
            ) : newpath === '/bookexperlp' ? (

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
                    <meta name="robots" content="noindex" />
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
            ) : newpath === '/book-marketing-services-cost' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
            ) : newpath === '/amazon-publishing-services-the-future-of-publishing' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

            ) : newpath === '/you-too-can-be-a-published-author-with-the-courtesy-of-amazon-publishing-services' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

            ) : newpath === '/affordable-book-marketing-services' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

            ) : newpath === '/hire-book-marketing-company-florida' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
            ) : newpath === '/7-benefits-of-hiring-an-amazon-book-marketing-company' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
            ) : newpath === '/top-3-reasons-why-authors-need-book-marketing-services' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

            ) : newpath === '/7-strategies-used-by-book-marketing-company-to-increase-book-sales-on-amazon' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
            ) : newpath === '/book-marketing-services-for-self-published-authors' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

            ) : newpath === '/4-creative-strategies-used-by-book-marketing-services-companies' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
            ) : newpath === '/book-marketinglp' ? (
                <Head>
                    <meta name="robots" content="noindex" />
                    <title>Trusted Book Marketing Company To Promote Your Manuscript</title>
                    <meta name="description" content="Promote your story with the best book marketing company, using innovative and personalized strategies to boost your book's visibility and sales."
                    />
                </Head>
            ) : null

            }

        </>
    )
}

export default Metas