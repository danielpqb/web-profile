import React from 'react'
import styled from 'styled-components'

export default function Skill({ skill, height, fontSizeOffset }) {
  return (
    <Container height={height} fontSizeOffset={fontSizeOffset}>
      <span>{skill.title}</span>
      <div><img src={skill.src} title={skill.title} alt="" /></div>
    </Container>
  )
};

const Container = styled.div`
  & {
    width: fit-content;
    height: ${({ height }) => height + 'px'};

    margin: 5px;

    background-color: rgba(255, 255, 255, 0.1);

    border: 4px solid rgba(0, 0, 0, 0.9);
    border-radius: 10px;

    flex-direction: column;
    justify-content: flex-start;

    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 25px;

    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 5px;

    padding: 0px 5px;
    color: rgba(255, 255, 255, 0.9);

    font-size: calc(var(--fontsize) - 3px + ${({ fontSizeOffset }) => fontSizeOffset + 'px'});
  }

  div {
    height: calc(100% - 25px);
  }

  img {
    object-fit: contain;
    padding: 5px;
  }
`