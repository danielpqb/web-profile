import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
  return (
    <Container>
      <div><Link to={'/'}>About Me</Link></div>
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

    z-index: 1;

    background-color: rgba(35, 35, 35, 0.99);
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.5);
  }

  a {
    color: white;
  }
`