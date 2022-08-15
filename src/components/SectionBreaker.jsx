import React from 'react'
import styled from 'styled-components'

export default function SectionBreaker({ children }) {
  return (
    <Container>
      {children.toUpperCase()}
    </Container>
  )
};

const Container = styled.div`
  & {
    color: white;

    border-bottom: 4px solid rgba(255, 255, 255, 0.7);

    margin-top: 60px;
    margin-bottom: 20px;
    padding: 10px;

    font-size: calc(var(--fontsize) + 2px);
    font-weight: bold;
  }
`