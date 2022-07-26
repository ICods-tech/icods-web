import React, { useMemo, useState } from 'react'
import Head from 'next/head'
import { Container, GrayDivider, RightSectionContainer } from '../../../../pageStyles/createStyles'
import 'react-dropdown/style.css'
import GlobalStyle from '../../../../../styles/globalStyle'
import { HeaderClient } from '../../../../components/Enterprise/ClientsSection/Header'
import RegisterClient from '../../../../components/Enterprise/RegisterClient'
import LeftSection from '../../../../components/Enterprise/LeftSection'

const CreateClient = () => {
  const menuOptionIconStyle = { width: '1rem', height: '1.25rem' }
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Empresarial | iCods</title>
      </Head>
      <Container>
        <LeftSection />
        <RightSectionContainer>
          <HeaderClient
            pageType="clientRegistry"
            name="iCods Tech" 
          />
          <GrayDivider />
          <RegisterClient />
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default CreateClient
