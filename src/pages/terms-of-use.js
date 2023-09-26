import React from 'react'
import styles from '@/styles/Termsofuse.module.css'
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import Aspiring from '../../components/Aspiring'
import Banner from '../../components/Banner'

const Termsofuse = () => {

  const termsHead = <h1 className='font50 fw700 color-blue'>Terms Of Use</h1>

  const terms = [
    {
      title: termsHead,
      banners: 'condition',
      alignclass: 'align',
    }
  ]



  return (
    <>



      <Head>

        <link rel="icon" href="/favicon.svg" />

      </Head>

      {/* banner components */}

      {terms.map((item, i) =>
        <Banner key={i}
          title={item.title}
          bannershome={item.banners}
          alignclass={item.alignclass}
        />
      )}

      <Container>
        <Row>
          <div className={styles.termsofuse}>

            <p className='font15 textcolor font-f'>
              Choice of visiting our homepage is solely the customer’s decision. Any dispute over privacy is subject to this notice and our Privacy Policy. This includes limitations on damages, arbitration of disputes, and the applicable law of the state. If the customers have any issues regarding the Privacy Policy, they should contact us at their best convenience. Our customer services shall be most happy to serve them. As our Policies are liable to change at any time, it is recommended that the customers go through the policy each time they enter the site to purchase.
            </p>

            <p className='font15 textcolor font-f'>The company gathers navigational information about where visitors go on our website and information about the technical efficiencies of our website and service i.e. time to connect and time to download pages. This information allows us to see which areas of our Company’s Website are most visited and helps us understand our customers better than before. This also helps us improve the quality of those sites which are lacking in some way or the other. Unless otherwise noted, all materials, including images, illustrations, designs, icons, photographs, written and other materials that are part of this site collectively, the “Contents” are copyrights, trademarks, trade dress and/or other intellectual property owned, controlled or licensed by the Company.</p>


            <p className='font15 textcolor font-f'>This site and all its contents are intended solely for personal and non-commercial use. The customers may download or copy the Contents and other downloadable materials displayed on the Site for their personal use only. No right, title or interest in any downloaded materials or software is transferred to the customer as a result of any such downloading or copying. The customer may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivatives, sell or participate in any sale or exploitation of the site, its content, or any related software.</p>

            <h3 className='font-f'>Electronic Communications</h3>

            <p className='font15 textcolor font-f'>The moment the customer visits our site or sends e-mails to our contacts, the customer is communicating with our company electronically. It’s involuntary for the customers to receive our communications electronically. Our Company will communicate with the customer by e-mail or by posting notices on this site. Thus, the customer agrees that all agreements, notices, disclosures and relevant communication satisfy and fulfill all legal requirements and are equivalent to any legal statement in writing.</p>

            <p className='font15 textcolor font-f'>YOU agree that BookWritingCube is not liable for any correspondence from email address (es) other than the ones followed by our own domain or/and any Toll-free number that is not mentioned on our website. BookWritingCube should not be held responsible for any damage(s) caused by such correspondence. We only take responsibility for any communication through email address (es) under our own domain name or/and via Toll-free number i.e. already mentioned on BookWritingCube’s Website.</p>



            <h3 className='font-f'>Copyright/Trademarks</h3>


            <p className='font15 textcolor font-f'>All content that is included on this site, such as text, graphics, logos, button icons, images, digital downloads, data compilations, and software, is the property of or its content suppliers and protected by and international ownership rightslaws. The compilation of all content at this site is the exclusive property of this company and protected by and international ownership rightslaws. All software used at this site is the property of this company or its software suppliers and protected by and international ownership rightslaws. The trademark names used within our sites are the property of their respective company or its subsidiaries and cannot be used in connection with any product or service that is not part of that company.</p>


            <p className='font15 textcolor font-f'>Site Policies, Modification, and Severability</p>

            <p className='font15 textcolor font-f'>We suggest all customers to our site review all other policies posted here. These policies also govern visits to our site. The Company reserves the right to make changes to our site, to our policies, and to these Conditions of Use at any time. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.</p>

            <h3 className='font-f'>Revision Policy</h3>

            <p className='font15 textcolor font-f'>We provide guaranteed three free revisions. Customers can ask us for free revisions. In case the number of pages exceeds, appropriate charges would then be applicable. In order to receive free revision, customers are required to request for a revision within 10 days of the order delivery date. However, in case of a large order, the timeline exceeds up to 35 days. If the revision request falls within these guidelines, we will revise the order to meet the customer’s initial requirements free of charge.</p>

            <p className='font15 textcolor font-f'>Once the above-mentioned timeline has passed it shall be assumed that the customer is satisfied.</p>

            <p className='font15 textcolor font-f'>Any revision request sent by the customer for plagiarism within the order provided must be accompanied by a detailed report for the plagiarism. All revision requests pertaining to customers order will be completed as per the urgency of the order with 24 hours as standard minimum turnaround time.</p>

            <p className='font15 textcolor font-f'>Revision turnaround time as per urgency is as follows:</p>

            <ul>
              <li className='font15 textcolor font-f'>For orders up to 24 hours of urgency; Revision turnaround time would be 24 hours.</li>
              <li className='font15 textcolor font-f'>For orders between 24-48 hours of urgency; Revision turnaround time would be 48 hours.</li>
              <li className='font15 textcolor font-f'>For orders of 48 hours and above; Revision turnaround time would be 72 hours.</li>
            </ul>

            <h3 className='font-f'>Our Programs</h3>

            <p className='font15 textcolor font-f'>The amount credited to your account through the Referral Discount offer is non-refundable and non-cashable. For programs and offers where additional amount is credited to the user account, e.g. Affiliate Program, the extra amount credited is non-refundable and non-cashable.</p>

            <h3 className='font-f'>Refund Policy</h3>

            <p className='font15 textcolor font-f'>If you request a refund before we start working on your project, a 100% of your payment will be refunded (transaction charges will be deducted). You may ask for a refund if you are not a 100% satisfied with your purchase. In such scenarios, we will refund all the balance payment of your order. The amount for which we have already completed the work for on your project will not be refunded. Please note that only the balance payment will be refunded. However, if you have a specific complaint and need a complete refund, you may send us a refund request and we will take a fair decision accordingly.</p>

            <p className='font15 textcolor font-f'>In case of a refund, the content written by BookWritingCube will remain our property and the customer cannot use it, in part or otherwise. If, however, it is found that the content written by BookWritingCube has been used by the customer, we, at BookWritingCube, shall have the right to initiate legal action.</p>

            <h3 className='font-f'>Quality Assurance Policy</h3>

            <p className='font15 textcolor font-f'>In order to provide the desired results, our consultants do not deviate from the specifications provided by the customer in the order form. All work is proofread prior to final delivery. It is to be noted that we guarantee the standard & quality of the order. Our quality control department double-checks each content for plagiarism before sending it to the customer. First, every content undergoes our authenticity test through various advanced plagiarism detection software’s. Finally, it goes to our specially employed board of editors that eliminates any possibility of plagiarism. All work submitted upon project completion becomes your property if it is paid for, and your responsibility.</p>

            <h3 className='font-f'>Your Account</h3>

            <p className='font15 textcolor font-f'>The use of individual customer accounts is solely the responsibility of the user in terms of maintaining the Confidentiality of their own account and password and for restricting access to their computer. As such, the customer agrees to accept responsibility for all activities that occur under “your account” or “password.”</p>

            <h3 className='font-f'>Best Price</h3>

            <p className='font15 textcolor font-f'>We offer services at the best price along with exclusive free features. Customers are charged at a special discounted price. A quick read of our exclusive service features will help customers understand how we stay successful in the business. If customers find any site offering these EXCLUSIVE features, we will give them 10% additional discount. Furthermore, once a customer takes advantage of any promotional deals offering discounts, other discounts, such as the Bulk Order Discount and the Membership Discount will not be applicable to their order.</p>


            <h3 className='font-f'>Disclaimers</h3>


            <ul>
              <li className='font15 textcolor font-f'>Customer expressly understands and agree that their use of the services is at their sole risk and that the services are provided “as is” and “as available.” In particular, the company, its subsidiaries, and affiliates, and its licensors do not represent or warrant to customers that:.</li>
              <li className='font15 textcolor font-f'>Customer’s use of the services will meet their requirements,</li>
              <li className='font15 textcolor font-f'>Customer’s use of the services will be uninterrupted, timely, secure or free from error,</li>
              <li className='font15 textcolor font-f'>Any information obtained by customers as a result of their use of the services will be accurate or reliable</li>
            </ul>


          </div>




        </Row>
      </Container>


      {/* Aspiring */}
      <div className='datacloud'>
      <Aspiring
        title='Professional Book Writing and Publishing We Give New Life To Your Words'
        text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
      />
      </div>
    </>
  )
}

export default Termsofuse