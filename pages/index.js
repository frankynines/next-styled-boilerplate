import Head from 'next/head'
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Main = styled.div`
  width: 960px;
  padding: 20px;
  margin: auto;
`;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next JS Boilerplate with some Styled Components - Franky Aguilar</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <Main>
        <h1>Welcome to my Shitty Project</h1>
        <p>You should probably edit this font. Or keep it. W/E</p>
      </Main>

    </div>
  )
}

Home.propTypes = {
};

