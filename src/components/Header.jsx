import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {

  const categories = [
    {
      link: '/',
      icon: 'home',
      name: 'About me'
    },
    {
      link: '/cv',
      icon: 'newspaper',
      name: 'CV'
    },
    {
      link: '/portfolio',
      icon: 'briefcase',
      name: 'Portfolio'
    },
  ]

  const [idSelected, setIdSelected] = useState(0)

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setIdSelected(0)
        break;

      case '/cv':
        setIdSelected(1)
        break;

      case '/portfolio':
        setIdSelected(2)
        break;

      default:
        break;
    }
  }, [setIdSelected])

  return (
    <Container>

      {categories.map((category, index) => {
        return (
          <Category id={index} idSelected={idSelected} key={index}>
            <Link to={category.link}>
              <ion-icon name={category.icon}></ion-icon>
              <h1>{category.name}</h1>
            </Link>
          </Category>
        )
      })
      }

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

const Category = styled.div`
  & * {
    color: ${({ idSelected, id }) => idSelected === id ? 'rgb(50, 120, 255)' : 'white'}
  }

  a {
    ${({ idSelected, id }) => idSelected === id && 'pointer-events: none'}
  }
`