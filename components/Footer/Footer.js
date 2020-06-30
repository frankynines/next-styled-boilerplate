import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';

const Container = styled.div`
    background-color: black;
    padding: 20px;
`;

const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-content: center;
    align-items: center;
    @media screen and (max-width: 640px) {
        display: block;
    }
`;

const RightOffering = styled.div`
`;

const Description = styled.p`
    color: white;
    text-align: center;
    margin-top: 40px;
    font-size: 10px;
`;

const SocialIcon = styled.img`
    margin-right: 20px;
`;

export default function Footer() {
  return (
    <Container>
        <FooterContainer>

         <RightOffering>
             <Link href="#"><a><SocialIcon src={"img/social/icon_twitter.svg"} /></a></Link>
             <Link href="#"><a><SocialIcon src={"img/social/icon_discord.svg"} /></a></Link>
             <Link href="#"><a><SocialIcon src={"img/social/icon_medium.svg"} /></a></Link>
             <Link href="#"><a><SocialIcon src={"img/social/icon_telegram.svg"} /></a></Link>
         </RightOffering>
         </FooterContainer>
        <Description>Terms of Use | Privacy Policy</Description>


    </Container>
  )
}