import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
  return (
    <Container>
      <div><Link to={'/about-me'}>About Me</Link></div>
      <div><Link to={'/cv'}>CV</Link></div>
      <div><Link to={'/portfolio'}>Portfolio</Link></div>
      <div><Link to={'/contact'}>Contact</Link></div>
    </Container>
  )
};

const Container = styled.div`
  & {
    position: fixed;
    top: 0;
    left: 0;

    height: 70px;
  }

  a {
    color: white;
  }
`