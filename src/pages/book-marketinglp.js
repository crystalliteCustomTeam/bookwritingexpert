import React from "react";
import {Banner, CaseStudies, FeaturedContact, Portfolio} from "../../components/bookmarketinglp";
import Services from "../../components/bookmarketinglp/Services/Services";

export default function bookmarketinglp() {
  return (
    <main>
      <Banner />
      <FeaturedContact/>
      <Services/>
      <CaseStudies/>
      <Portfolio/>
    </main>
  );
}
