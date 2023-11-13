const Schema = () => (
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "bookwritingexperts",
          "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
          "@id": "",
          "url": "https://www.bookwritingexperts.com/",
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
      `}
    </script>
  );
  
  export default Schema;
  