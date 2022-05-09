import Head from 'next/head'
import 'react-dropdown/style.css'
import GlobalStyle from '../../../styles/globalStyle'
import { Header } from "../../components/Enterprise/Header"
import { Footer } from '../../components/Footer'
import { ChangesTermsConditions, ContactUs, ContainerBody, ContentContainer, Paragraph, SectionContainer, Subtitle, TermsConditions } from '../../pageStyles/termsStyles'

const Politcs = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Empresarial | ICods</title>
      </Head>
      <Header darkMode={false} />
      <ContentContainer>
        <SectionContainer>
          <h2> Políticas de privacidade </h2>
        </SectionContainer>

        <ContainerBody>
          <TermsConditions>
            <Subtitle>
              Last updated: November 15, 2021
            </Subtitle>
            <Paragraph>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </Paragraph>
            <Paragraph>
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
            </Paragraph>
            <Paragraph>
              The iCods app stores and processes personal data that you have provided to us, in order to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the iCods app won’t work properly or at all.
            </Paragraph>
            <Paragraph>
              The app does use third party services that declare their own Terms and Conditions.
            </Paragraph>
            <Paragraph>
              Link to Terms and Conditions of third party service providers used by the app
            </Paragraph>

            <Paragraph style={{ marginLeft: "30px" }}>
              <li>
                Google Play Services
              </li>
              <li>
                Facebook
              </li>
            </Paragraph>
            <Paragraph>
              You should be aware that there are certain things that iCods will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but iCods cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.
            </Paragraph>
            <Paragraph>
              If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
            </Paragraph>
            <Paragraph>
              Along the same lines, iCods cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, iCods cannot accept responsibility.
            </Paragraph>
            <Paragraph>
              With respect to iCods’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. iCods accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
            </Paragraph>
            <Paragraph> 
              At some point, we may wish to update the app. The app is currently available on Android & iOS – the requirements for both systems(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. iCods does not promise that it will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
            </Paragraph>
          </TermsConditions>
          <ChangesTermsConditions>
            <Subtitle>
              Changes to This Terms and Conditions
            </Subtitle>
            <Paragraph>
              We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
            </Paragraph>
            <Paragraph>
              These terms and conditions are effective as of 2021-11-15
            </Paragraph>

          </ChangesTermsConditions>
          <ContactUs>
            <Subtitle>Contact Us</Subtitle>
            <Paragraph>
              If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at icods.tech@gmail.com.
            </Paragraph>
          </ContactUs>
        </ContainerBody>
      </ContentContainer>
      <Footer />
    </>
  )
}



export default Politcs

