import React from 'react';
import Home from '../components/Home';
import GlobalStyle from '../../styles/globalStyle'
import {getSession} from 'next-auth/react'


const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await getSession(context)
    }
  }
}

export default HomePage;
