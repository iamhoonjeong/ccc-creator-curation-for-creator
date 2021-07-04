import React, { useState } from 'react';
import styled from 'styled-components';
import Creator from './Creator';

const Wrapper = styled.div`
  width: calc(100% - 12rem);
  padding: 6rem 6rem 3rem 6rem;
`;

const BodyTitle = styled.h1`
  font-size: 3.2rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreatorWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SelectorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;

  div {
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid black;
    }
  }
  div + div {
    margin-left: 1rem;
  }
`;

const CreatorList = ({
  creators,
  onSelectAll,
  onSelectDeveloper,
  onSelectMusician,
  onSelectPainter,
  onSelectDesigner,
}) => {
  const [popCard, setPopCard] = useState(false);
  const onClick = () => {
    setPopCard(true);
    setTimeout(() => {
      setPopCard(false);
    }, 300);
  };
  return (
    <Wrapper>
      <BodyTitle>Creator Curation for Creator</BodyTitle>
      <SelectorWrap onClick={onClick}>
        <div onClick={onSelectAll}>All</div>
        <div onClick={onSelectMusician}>Musician</div>
        <div onClick={onSelectPainter}>Painter</div>
        <div onClick={onSelectDesigner}>Designer</div>
        <div onClick={onSelectDeveloper}>Developer</div>
      </SelectorWrap>
      <CreatorWrap>
        {creators.map((creator) => (
          <Creator
            popCard={popCard}
            key={creator.id}
            name={creator.name}
            category={creator.category}
            portrait={creator.portrait}
          />
        ))}
      </CreatorWrap>
    </Wrapper>
  );
};

export default React.memo(CreatorList);
