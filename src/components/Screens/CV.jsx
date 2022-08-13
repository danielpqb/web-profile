import styled from "styled-components"

import background from '../../assets/img/background.jpg'

import Header from "../Header"
import SectionBreaker from "../SectionBreaker"

export default function CV() {

  const mainSkills = [
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
      title: "JavaScript"
    },
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
      title: "TypeScript"
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      title: "React"
    },
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
      title: "HTML5"
    },
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
      title: "CSS3"
    },
  ]

  const otherSkills = [
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
      title: "NodeJS"
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      title: "MongoDB"
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      title: "C#"
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      title: "C++"
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      title: "Python"
    },
  ]

  return (
    <Container img={background}>

      <Header />

      <SectionBreaker>Main Skills</SectionBreaker>
      <Skills>
        {mainSkills.map((value, index) => {
          return <img src={value.src} alt="" title={value.title} key={index} />
        })}
      </Skills>

      <SectionBreaker>Other Skills</SectionBreaker>
      <Skills>
        {otherSkills.map((value, index) => {
          return <img src={value.src} alt="" title={value.title} key={index} />
        })}
      </Skills>

    </Container>
  )
};

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;

    /* background-image: ${({ img }) => (`url(${img})`)}; */
    background-color: rgba(15, 15, 15, 0.99);
    background-size: cover;

    flex-direction: column;
    justify-content: flex-start;

    padding: 20px;
  }
`

const Skills = styled.div`
  & {
    
  }

  img {
    max-width: 40px;
    margin: 5px;
  }
`