import React, { useState, useEffect } from 'react';

import GlobalStyle from '../styles/global';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log("Component Mounted")
  }, [])

    return (
    <>
        <GlobalStyle/>
        <Header />
        <Component {...pageProps} />
        <Footer/>
    </>
    );
  }

  MyApp.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  export default MyApp;