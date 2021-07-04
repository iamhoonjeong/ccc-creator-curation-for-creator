import React, { useEffect } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const CreatorWrap = styled.div`
  &:hover {
    box-shadow: 0 8px 6px -6px black;
  }
  &.popCard {
    opacity: 0;
    margin-top: 2.5rem;
  }
  transition-property: margin-top, box-shadow, opacity;
  transition-duration: 0.5s;

  @media screen and (min-width: 1600px) {
    height: 520px;
  }
  @media screen and (max-width: 1600px) {
    height: 400px;
  }
  @media screen and (max-width: 1320px) {
    height: 320px;
  }
  width: 100%;
  background: #a4193d;
  min-width: calc(25% - 1rem);
  max-width: calc(20% - 1rem);
  margin: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;

  h1 {
    @media screen and (min-width: 1600px) {
      font-size: 2.2rem;
    }
    @media screen and (max-width: 1600px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 1320px) {
      font-size: 1.4rem;
    }
    font-family: 'Montserrat Alternates';
    color: white;
    width: 100%;
    padding-top: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    @media screen and (min-width: 1600px) {
      font-size: 1.4rem;
    }
    @media screen and (max-width: 1600px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 1320px) {
      font-size: 1rem;
    }
    font-family: 'Montserrat Alternates';
    font-style: italic;
    color: white;
    padding-top: 1rem;
  }
`;

const Background = styled.div`
  width: 100%;
  object {
    width: 100%;
    height: 100%;
    margin-top: -1rem;
  }
`;

const Creator = ({ name, category, portrait, popCard }) => {
  let closeId, openId;

  const eyeBlink = () => {
    const target = document.getElementById(name);
    const svgDoc = target.contentDocument;
    const eyePath = svgDoc.querySelectorAll('.st5');

    closeId = setInterval(() => {
      eyePath[0].setAttribute('visibility', 'hidden');
      eyePath[1].setAttribute('visibility', 'hidden');
      eyePath[2].setAttribute('visibility', 'visible');
      eyePath[3].setAttribute('visibility', 'visible');
    }, 1500);

    openId = setInterval(() => {
      eyePath[0].setAttribute('visibility', 'visible');
      eyePath[1].setAttribute('visibility', 'visible');
      eyePath[2].setAttribute('visibility', 'hidden');
      eyePath[3].setAttribute('visibility', 'hidden');
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearInterval(closeId);
      clearInterval(openId);
    };
  }, []);

  if (!portrait) {
    return;
  }

  return (
    <CreatorWrap className={cn({ popCard: popCard })}>
      <h1>{name}</h1>
      <h3>{category}</h3>
      <Background>
        <object
          data={portrait}
          type="image/svg+xml"
          id={name}
          onLoad={eyeBlink}
        >
          {portrait}
        </object>
      </Background>
    </CreatorWrap>
  );
};

export default React.memo(Creator);
