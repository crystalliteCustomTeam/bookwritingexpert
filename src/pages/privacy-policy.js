import React from 'react'
import styles from '@/styles/Termsofuse.module.css'
import Banner from '../../components/Banner'
import Head from 'next/head'
import { Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Aspiring from '../../components/Aspiring'

const Privacypolicy = () => {

    const privacyHead = <h1 className='font50 fw700 color-blue'>Privacy Policy</h1>

    const terms = [
        {
            title: privacyHead,
            banners: 'condition',
            alignclass: 'align',
        }
    ]



    return (
        <>



            <Head>

                <link rel="icon" href="/favicon.svg" />
                <title> Read Our Privacy Policy - Book Writing Experts</title>
                <meta name="description" content="Find out how your privacy is protected by Book Writing Experts. For peace of mind and confidence in our services, read our  privacy policy." />
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

                        <h3 className='font-f'>Objective test</h3>

                        <p className='font15  textcolor font-f'>
                            Bookwriting Cube is committed to protecting your privacy when you visit our Site(s). We want you to know what Information we collect, how we use it, and how you can request that this Information is updated or corrected. The organization reserves the right to amend or otherwise modify this Privacy Policy at any time, so please re-visit this page periodically to check for updates. The date of last revision is shown at the top of this document.
                        </p>

                        <h3 className='font-f'>Scope</h3>

                        <p className='font15  textcolor font-f'>Our Privacy Policy covers any visitor to our Site(s). This policy applies to both online and offline collection, storage, processing, and transfer of Personal Information.</p>


                        <h3 className='font-f'>Definitions</h3>


                        <p className='font15  textcolor font-f'>As used in this Privacy Policy, the following terms have the following meanings:</p>


                        <ul>
                            <li className='font15  textcolor font-f'>“Financial Information” means specific Personal Information of a financial nature such as your
                                credit card number.
                            </li><li className='font15  textcolor font-f'>“Information” means any Information collected and includes: “Personal Information”, “Financial
                                Information”, “Web Analytical Information” or any other Information collected from you through
                                our Site(s).
                            </li>

                            <li className='font15  textcolor font-f'>“Marketing Information” means your Web Analytical Information and your Personal Information such
                                as your name, address, e-mail address and telephone number that the Organization collects uses
                                and discloses for the marketing and promotional purposes as disclosed in this Privacy Policy.
                            </li>
                            <li className='font15  textcolor font-f'>“Personal Information” means Information that may be used, alone or in combination, to identify
                                a specific individual and includes Financial Information.
                            </li>
                            <li className='font15  textcolor font-f'>“Site” or “Sites” means the Organization’s website located at www.bookwritingcube.com as any
                                other Organization-controlled or authorized Sites (including, without limitation, any Business
                                Associate sites), regardless of domain name or IP address.
                            </li>
                            <li className='font15  textcolor font-f'>“Social Network”, means various Internet communication technologies provided on Sites that
                                facilitate conversation and interaction between people online and includes, but is not limited
                                to, blogs, discussion forums, wikis, chat sessions, newsgroups, etc.
                            </li>
                            <li className='font15  textcolor font-f'>“Social Network Content” (or “SNC”) means the user-generated content you consent to share via a
                                Social Network and includes, but is not limited to, Personal Information, including digital
                                sounds and pictures that you upload to a Social Network. It also includes your Personal
                                Information that may be displayed on other users’ Social Network pages.
                            </li>
                            <li className='font15  textcolor font-f'>“Organization”, “we”, “us”, and “our” refer to the Bookwriting Cube.
                            </li>
                            <li className='font15  textcolor font-f'>“Unrelated Entities” means third parties that are not Educational Partners and who are not
                                providing services to Bookwriting Cube. as Business Associates.
                            </li>
                            <li className='font15  textcolor font-f'>“Web Analytical Information” means internet generated Information we collect when you visit our
                                Sites. This Information may be linked to marketing and Personal Information. When linked with
                                other Information identifying you personally, either alone or in combination with other
                                Information, then such Information also will be considered Personal Information.
                            </li>

                        </ul>

                        <h3 className='font-f'>Information We Collect</h3>

                        <p className='font15  textcolor font-f'>We collect various types of Information from you through our Sites, when we talk to you on the phone. Some of this Information is collected automatically through various web and internet technologies including Social Networking tools used by the Organization. Other Information is collected when you provide it in response to an advertisement, or a request for information; or if you register or order educational or other products and services, set up a Social Network or other Site profile, or if you choose to use one of our learning assessments or other interactive tools..</p>

                        <p className='font15  textcolor font-f'>Our collection of Web Analytical Information lets us see how users are finding, and navigating our Sites, user preferences regarding Site or Social Networking Content, and it tells us which pages users visited most often so we can make our Sites more useful and relevant. This Information may be linked with personal Information to accomplish the purposes described in this Privacy Policy..</p>





                        <h3 className='font-f'>Information Collected Automatically</h3>

                        <p className='font15  textcolor font-f'>Each time you visit one of our Sites, Web Analytical Information is automatically gathered. In general, this Information does not identify you personally. Examples of Web Analytical Information include, but are not limited to:.</p>


                        <ul>
                            <li className='font15  textcolor font-f'>IP address</li>
                            <li className='font15  textcolor font-f'>Collection Date</li>
                            <li className='font15  textcolor font-f'>Publisher Name</li>
                            <li className='font15  textcolor font-f'>Connection Speed</li>
                            <li className='font15  textcolor font-f'>Day of Week Time of Day (hour)</li>
                            <li className='font15  textcolor font-f'>Language settings</li>
                            <li className='font15  textcolor font-f'>Country, State, DMA, City (relating to IP address, if available)</li>
                            <li className='font15  textcolor font-f'>Domain (.com, .net, .mil, .org, .edu, etc.)</li>
                        </ul>




                        <h3 className='font-f'>How We Use This Information</h3>

                        <h4 className='font-f'>Marketing Information</h4>

                        <p className='font15  textcolor font-f'>We use marketing Information to help us better plan our Sites and services to meet your needs; to measure and improve our Site(s)’ services and features, to communicate with you by e-mail, postal mail, telephone, cellular/mobile phone, PDA devices, and/or on applications for mobile phones such as iPhone or Blackberry about products or services that may be of interest to you, to provide you with customer support, to prevent potentially illegal activities (including illegal downloading of copyrighted materials in accordance with our Copyright Infringement policy), and to enforce our Terms of Use. We also use a variety of technological systems to detect and address anomalous activity and to screen content to prevent certain abuses such as spam. These efforts may on occasion result in permanent suspension or termination of Site functionality for some users.</p>





                        <h3 className='font-f'>Personal Information</h3>

                        <p className='font15  textcolor font-f'>The Organization recognizes that by choosing to provide us with your Personal Information, you are demonstrating your trust in us and we take that trust seriously. We will not sell, rent or lease your Personal Information to others. We may collect, use and disclose Personal Information for the following purposes:</p>
                        <ul>
                            <li className='font15  textcolor font-f'>to provide requested products and services</li>
                            <li className='font15  textcolor font-f'>to respond to your inquiries</li>
                            <li className='font15  textcolor font-f'>to administer promotions to which you have indicated an interest</li>
                            <li className='font15  textcolor font-f'>for our internal marketing purposes, which includes, but is not limited to, sending you material
                                about products, services, updates, etc. that we think may be of interest to you</li>
                            <li className='font15  textcolor font-f'>for fostering communication and collaboration among members of the Organization community
                                through Social Networks</li>
                            <li className='font15  textcolor font-f'>for sharing with our Partners who may contact you with respect to their services;</li>
                            <li className='font15  textcolor font-f'>for sharing with our Partners or Business Associates who are performing services on our behalf
                            </li>
                            <li className='font15  textcolor font-f'>to analyze how Sites and services are being accessed and used;</li>
                            <li className='font15  textcolor font-f'>to improve Site and service performance and delivery</li>
                            <li className='font15  textcolor font-f'>to analyze academic and learning outcomes and preferences</li>
                            <li className='font15  textcolor font-f'>to analyze risk and business results</li>
                            <li className='font15  textcolor font-f'>to obtain payment for services that we provide to you</li>
                            <li className="last font15  textcolor font-f">to maintain business records for reasonable periods</li>
                        </ul>

                        <p className='font15  textcolor font-f'>In connection with the uses set forth above, we may use an automatic telephone dialing system, artificial or prerecorded voice messages, or text messages to provide you with various communications. Further, when you provide us with a cellular, wireless, or mobile telephone number as your contact number, you agree that you are providing us with your express consent to receive calls using an automated dialing system, prerecorded voice messages or text messages related to your enrollment. If you do not wish to receive these updates on your cellular or mobile phone, please provide us with a LAN-based telephone number.</p>


                        <h3 className='font-f'>Financial Information</h3>

                        <p className='font15  textcolor font-f'>Your Financial Information will be used to provide requested products and services, to analyze operational and business results, to analyze risk, and for concluding your registration or other transaction you have initiated with us. It will not be sold, rented, or otherwise transferred to an Educational Partner, Business Associate or Unrelated Entity outside of this purpose, except in the case of a reorganization, merger or acquisition of our shares or assets.</p>

                        <p className='font15  textcolor font-f'>We use Secure Socket Layer (SSL) 128-bit encryption to protect your credit card details submitted to us over the Internet. No one can view your credit card information, not even our staff members.</p>

                        <h3 className='font-f'>Opt-Out</h3>

                        <p className='font15  textcolor font-f'>You may opt-out of our collection, use and disclosure of your Personal Information at any time, subject to contractual, academic, legal or technical restrictions and reasonable notice. Note that if you opt-out of certain uses of your Personal Information, we may no longer be able to provide certain products or services. You may not be permitted to opt-out to the certain necessary collection, uses, and disclosures, for example, but not limited to, educational announcements, maintaining reasonable academic, business and transaction records and disclosures to government entities as required for us to comply with applicable laws.</p>


                        <p className='font15  textcolor font-f'>You can choose to no longer receive marketing communications from us and you may express your choice where indicated on the applicable email or other communication. Please note, however, that such a request will only remove you from our list and the list of any Business Associate performing services on our behalf. We are not responsible for the use any other party may make of the Information once it has been transferred in accordance with this Policy and you will need to contact such entity to have your Information removed from their database.</p>


                        <p className='font15  textcolor font-f'>You may change various user settings related to sharing your Personal Information contained in any user profile you set up as part of Social Network activities furnished by us, subject to contractual, academic, legal or technical restrictions and reasonable notice. Note that your withdrawal from Social Network activities might prevent us from providing you with certain products or services.</p>


                        <h3 className='font-f'>Our Security Measures</h3>



                        <p className='font15  textcolor font-f'>We will take commercially reasonable measures to secure and store your Information to protect against the loss, misuse, and alteration of the Information under our control. We utilize industry standard security measures when accepting your credit card Information during the online ordering process, as well as whenever we ask you to login to any of our Site(s).</p>


                        <p className='font15  textcolor font-f'>Unfortunately, no data transmission over the internet can be guaranteed to be completely secure. As a result, although we will utilize such measures, we do not guarantee you against the loss, misuse, or alteration of Information under our control, and you provide Information to us at your own risk. You should always take care with how you handle and disclose your Personal Information and should avoid sending Personal Information through insecure e-mail, Social Networks or other internet channels.</p>


                        <h3 className='font-f'>Monitoring of Communications</h3>


                        <p className='font15  textcolor font-f'>We may monitor and retain all incoming and outgoing communications for the training of our representatives and for quality assurance purposes. To the extent such communications are selected, they are only retained as long as necessary to adequately discharge these purposes, unless a specific communication needs to be retained for legal reasons. If you prefer that your communications not be retained for any reason, please advise your representative.</p>



                        <h3 className='font-f'>Internet Technologies Used</h3>


                        <p className='font15  textcolor font-f'>Cookies, web beacons and other relevant internet technologies are used on our Sites to allow us to accomplish the uses set out above as well as to deliver Sites messaging and to keep track of your Information. These small pieces of program code reside in your computer and browser and can be removed. If you desire to remove such technologies you may do so, but this may render our Sites unusable to you. You can opt out of cookies or the other internet technologies used by disabling these features in your browser program. Consult your browser’s “Help” menu for assistance in changing cookie settings or removing cookie files.</p>




                        <h3 className='font-f'>Children's Privacy</h3>


                        <p className='font15  textcolor font-f'>We are very sensitive to the issue of children’s privacy. Our Sites are neither developed for nor directed at children under 13. If you believe your child has provided us with Personal Information, or registered at one of our Sites and would like to have this Information removed, you can contact us or remove it personally.</p>


                        <h3 className='font-f'>Site Hosting and Links from Our Sites to Other Websites</h3>


                        <p className='font15  textcolor font-f'>Some of our Sites may be hosted by our Business Associates or contain links to external websites hosted by Partners and Unrelated Entities. When you access these Sites or external websites, the providers of the websites may have access to your Personal Information and may apply their own policies on how your Personal Information is used. Please make sure to read the policies of any Sites you visit on the internet carefully. Please be aware that we are not responsible for the privacy practices or the content of any sites or external websites that we do not control directly and the collection, use and disclosure of Information about you by Partners, Business Associates, and Unrelated Entities will be subject to the policies applicable to those other Sites or external websites.</p>




                        <h3 className='font-f'>Privacy Policy Changes</h3>


                        <p className='font15  textcolor font-f'>Bookwriting Cube may update this Privacy Policy or revise it from time to time. If you are concerned about how your Personal Information is used or disclosed you should contact us as described below or check back at this Site periodically to obtain a current copy of this Privacy Policy. We urge you to review this Privacy Policy frequently to obtain the current version. Your continued provision of Personal Information or use of our services following any changes to this Privacy Policy constitutes your acceptance of such changes. If we intend to use Information that personally identifies you in a manner materially different from what we stated at the time it was collected, we will attempt to notify you at least 30 days in advance. You will be given a choice as to whether or not previously provided Information may be used in a new way.</p>



                        <h3 className='font-f'>How to Access Your Information and Contact Us</h3>


                        <p className='font15  textcolor font-f'>If you want access to or wish to update any of your Personal Information or have any questions about our privacy practices, please contact at:</p>

                        <ul>
                            <li className='font15  textcolor font-f'>
                                Toll-Free number: <Link className='textdocationnone color-blue hover' href="tel:(855) 500 0057">(855) 500 0057</Link>
                            </li>
                            <li className='font15  textcolor font-f'>
                                E-mail: <Link className='textdocationnone color-blue hover' href="mailto:support@bookwritingexperts.com">support@bookwritingexperts.com</Link>
                            </li>
                        </ul>





                    </div>
                </Row>
            </Container>


            {/* Aspiring */}

            <div className='datacloud'>
                <Aspiring
                    title='Professional Book Writing and Publishing We Give New Life To Your Words'
                    text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
                    number="(855) 500 0057"
                    discuss="LET'S DISCUSS"
                />
            </div>
        </>
    )
}

export default Privacypolicy