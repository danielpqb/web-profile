import styled from "styled-components"

import Header from "../Header"
import MyTable from "../MyTable"
import SectionBreaker from "../SectionBreaker"

export default function Portfolio() {
  return (
    <Container>
      <Header />

      <SectionBreaker>Projects</SectionBreaker>
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

      <SectionBreaker>Github Stats</SectionBreaker>
      <GitStats>
        <a href="http://www.github.com/danielpqb">
          <img src="https://github-readme-stats.vercel.app/api?username=danielpqb&amp;show_icons=true&amp;hide=&amp;count_private=true&amp;title_color=3382ed&amp;text_color=ffffff&amp;icon_color=3382ed&amp;bg_color=171717&amp;hide_border=true&amp;show_icons=true" alt="" />
        </a>

        <a href="http://www.github.com/danielpqb">
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=danielpqb&amp;stroke=ffffff&amp;background=171717&amp;ring=3382ed&amp;fire=3382ed&amp;currStreakNum=ffffff&amp;currStreakLabel=3382ed&amp;sideNums=ffffff&amp;sideLabels=ffffff&amp;dates=ffffff&amp;hide_border=true" alt="" />
        </a>

        <a href="https://github.com/danielpqb">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=danielpqb&amp;layout=compact&amp;title_color=3382ed&amp;text_color=ffffff&amp;icon_color=3382ed&amp;bg_color=171717&amp;hide_border=true&amp;locale=en&amp;custom_title=Top%20%Languages" alt="" />
        </a>
      </GitStats>

      <a href="https://github.com/danielpqb?tab=followers" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/github/followers/danielpqb?logo=github&amp;style=for-the-badge&amp;color=3382ed&amp;labelColor=171717" alt="" />
      </a>

    </Container>
  )
};

const Container = styled.div`
  & {
    width: calc(70vw - (100vw - 100%));
    min-height: 100vh;

    flex-direction: column;
    justify-content: flex-start;

    padding: 20px;
  }
`

const GitStats = styled.div`
  & {
    flex-wrap: wrap;
  }

  a {
    height: 175px;
    padding: 5px;
  }
`