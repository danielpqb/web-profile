import styled from "styled-components"

import background from '../../assets/img/background.jpg'

import Header from "../Header"
import MyTable from "../MyTable"

export default function Portfolio() {
  return (
    <Container img={background}>
      <Header />

      <h1>Projects</h1>
      <ion-icon name="chevron-down" role="img" class="md hydrated" aria-label="chevron down"></ion-icon>

      <MyTable
        headers={[
          'Deploy',
          'Repo',
          'Description',
          'Techs',
        ]}

        lines={[
          {
            deploy: { name: 'Slimeland', href: 'https://danielpqb.github.io/my-first-web-game/' },
            repo: { href: 'https://github.com/danielpqb/my-first-web-game' },
            description: 'An RPG game on your web browser',
            techs: [
              'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
              'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
              'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
            ]
          },
          {
            deploy: { name: 'Enem 2019', href: 'https://github.com/danielpqb/Enem2019' },
            repo: { href: 'https://github.com/danielpqb/Enem2019' },
            description: 'An analysis of brazilian students performance on Enem 2019',
            techs: [
              'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/b76704a375ae550a08e627ab148945e6eee3d0d6/SVG/Power-BI.svg',
              'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
              'https://raw.githubusercontent.com/jupyter/notebook/984eefc2a713fad3431427f51ee2a5eda9b47cc1/jupyter.svg',
            ]
          },
          {
            deploy: { name: 'ERP Oficina Design', href: 'https://github.com/danielpqb/ERP-Oficina-Design' },
            repo: { href: 'https://github.com/danielpqb/ERP-Oficina-Design' },
            description: 'An ERP that controlls invetory, orders, production, clients, providers and products',
            techs: [
              'https://img.icons8.com/color/344/microsoft-excel-2019--v1.svg',
              'https://img.icons8.com/color/344/microsoft-access-2019--v1.svg',
              'https://icon-library.com/images/vba-icon/vba-icon-10.jpg',
              'https://img.icons8.com/external-soft-fill-juicy-fish/344/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png',
            ]
          },
        ]}
      />

    </Container>
  )
};

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    height: 100vh;

    background-image: ${({ img }) => (`url(${img})`)};
    background-size: cover;

    flex-direction: column;

    padding: 20px;
  }
`