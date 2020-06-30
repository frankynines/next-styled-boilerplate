import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 450px 200px;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    background-color: black;

    @media screen and (max-width: 640px) {
        grid-template-columns: auto 60%;
        width: 100%;
        grid-column-gap: 20px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: auto 60%;
    }
`;


const Navigation = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: right;
    grid-column-gap: 40px;
    font-size: 14px;

    @media screen and (max-width: 640px) {
       display: none;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Button = styled.button`
   background-color: black;
   border: white solid 2px;
   text-align: center;
   padding: 10px;
   color: white;

   @media screen and (max-width: 640px) {
        width: 100%;
    }
`;

const Logo = styled.h1`
    color: white;
    margin: 0;
`;

const Header = () => {
    return (
      <Container>
        <Link href={'/'}>
           <Logo>Boiler Plate</Logo>
        </Link>
  
        <Navigation>
            <Link href={'/#'}><a>Apple</a></Link>
            <Link href={'/#'}><a>Mango</a></Link>
            <Link href={'/'}><a>Pear</a></Link>
        </Navigation>

       <Button >Login</Button>
        
      </Container>
    );
}

Header.propTypes = {
};

export default Header;