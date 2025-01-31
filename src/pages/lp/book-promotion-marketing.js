import {
  BrandLogos,
  ClientLogos,
  Hero,
  Portfolio,
  Pricing,
  Process,
  PromoteBook,
  Qualify,
  Reviews,
  WhyChoose,
} from "@/components/lp/book-promotion-marketing"
import FAQs from "@/components/lp/book-promotion-marketing/FAQs"

const BookPromotionMarketing = () => {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Qualify />
      <PromoteBook />
      <WhyChoose />
      <Pricing />
      <Portfolio />
      <BrandLogos />
      <Process />
      <FAQs />
      <Reviews />
    </>
  )
}

export default BookPromotionMarketing
