import React from 'react'
import styled from 'styled-components'

export default function SectionBreaker({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
};

const Container = styled.div`
  & {
    color: white;

    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 5px;

    margin-top: 60px;
    margin-bottom: 10px;
    padding: 10px;
  }
`