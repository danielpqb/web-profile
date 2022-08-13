import styled from "styled-components"

import background from '../../assets/img/background.jpg'
import ProfilePhoto from "../ProfilePhoto"

import Header from "../Header"
import ContactLinks from "../ContactLinks"

export default function Home() {
  return (
    <Container img={background}>
      <Header />
      <Info>
        <ProfilePhoto />
        <h1>Daniel Barros</h1>
        <h2>Web Dev</h2>
        <ContactLinks />
      </Info>
    </Container>
  )
};

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    height: 100vh;

    background-image: ${({ img }) => (`url(${img})`)};
    background-size: cover;
  }
`

const Info = styled.div`
  & {
    flex-direction: column;
    height: 50%;

    text-align: center;
  }

  h1 {
    font-size: 60px;
  }
  
  h2 {
    font-size: 26px;
  }
`