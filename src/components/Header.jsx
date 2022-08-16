import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
  return (
    <Container>

      <Logo>
        <Link to={'/'}>
          <ion-icon name='home'></ion-icon>
          <h1>About me</h1>
        </Link>
      </Logo>

      <div>
        <Link to={'/cv'}>
          <ion-icon name='newspaper'></ion-icon>
          <h1>CV</h1>
        </Link>
      </div>

      <div>
        <Link to={'/portfolio'}>
          <ion-icon name='briefcase'></ion-icon>
          <h1>Portfolio</h1>
        </Link>
      </div>

    </Container>
  )
};

const Container = styled.div`
  & {
    justify-content: flex-end;

    text-align: center;

    position: fixed;
    top: 0;
    left: 0;

    height: 70px;

    z-index: 1;

    background-color: rgba(15, 15, 15, 0.99);
  }

  div {
    box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    margin: 0px 1px;
    padding: 0px 15px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;

    color: white;
  }

  ion-icon {
    margin-right: 10px;
    font-size: calc(var(--fontsize) + 12px);
  }

  @media (max-width: 1100px) {
    a {
      flex-direction: column;
    }
    
    ion-icon {
      margin-right: 0px;
    }
  }
`

const Logo = styled.div`
  & {
  }
`