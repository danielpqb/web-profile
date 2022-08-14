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
        <h1>Daniel P. Q. Barros</h1>
        <h2>Full Stack Software Engineer Developer</h2>
        <ContactLinks />
      </Info>
    </Container>
  )
};

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    height: 100vh;

    /* background-image: ${({ img }) => (`url(${img})`)}; */
    background-color: rgba(15, 15, 15, 0.99);
    background-size: cover;

    padding: 20px;
  }
`

const Info = styled.div`
  & {
    flex-direction: column;
    height: 50%;

    text-align: center;
  }

  h1 {
    font-size: 45px;
  }
  
  h2 {
    font-size: 18px;
    font-style: italic;
  }
`