import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import CreatorListContainer from './containers/CreatorListContainer';

const Wrapper = styled.div`
  @media screen and (max-width: 1100px) {
    display: none;
  }
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Need1200 = styled.div`
  @media screen and (min-width: 1100px) {
    display: none;
  }
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
`;

const Header = styled.header`
  font-size: 1.4rem;
  font-weight: 400;
  width: 120px;
  height: 42px;
  position: fixed;
  top: 1.6rem;
  left: calc(50% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-delay: 2s;
  transition: 0.6s 0.3s;
  cursor: pointer;

  ${(props) =>
    props.hideheader &&
    css`
      top: calc(-1rem - 21px);
    `};
`;

const Footer = styled.footer`
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hideheader, setHideheader] = useState(false);

  const hideEvent = () => {
    setScrollY(document.documentElement.scrollTop);
    if (scrollY >= 200) {
      setHideheader(true);
    } else if (scrollY < 200) {
      setHideheader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', hideEvent);
    return () => {
      window.removeEventListener('scroll', hideEvent);
    };
  }, [scrollY]);

  return (
    <>
      <Need1200>more than 1100px</Need1200>
      <Wrapper>
        <Link to="/">
          <Header hideheader={hideheader}>CCC</Header>
        </Link>
        <CreatorListContainer />
        <Footer>created by hoon jeong</Footer>
      </Wrapper>
    </>
  );
};

export default App;
