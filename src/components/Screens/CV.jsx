import styled from "styled-components"

import background from '../../assets/img/background.jpg'

import Header from "../Header"
import Language from "../Language"
import SectionBreaker from "../SectionBreaker"
import Skill from "../Skill"

export default function CV() {

  const skills = [
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
      title: "JavaScript",
      type: 'main',
    },
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
      title: "TypeScript",
      type: 'main',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      title: "React",
      type: 'main',
    },
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
      title: "HTML5",
      type: 'main',
    },
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
      title: "CSS3",
      type: 'main',
    },
    {
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
      title: "NodeJS",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      title: "MongoDB",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      title: "C#",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      title: "C++",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      title: "Python",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      title: "MySQL",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg",
      title: "Jupyter",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      title: "SQLServer",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg",
      title: ".NET",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
      title: "Azure",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
      title: "VisualStudio",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      title: "VSCode",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      title: "PostgreSQL",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      title: "AWS",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      title: "Docker",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      title: "Git",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/anaconda/anaconda-original.svg",
      title: "Anaconda",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg",
      title: "ESLint",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      title: "Express",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg",
      title: "Heroku",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ionic/ionic-original.svg",
      title: "Ionic",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      title: "NextJS",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      title: "NodeJS",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg",
      title: "npm",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      title: "Numpy",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      title: "Pandas",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
      title: "Photoshop",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      title: "Python",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-plain.svg",
      title: "Trello",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg",
      title: "Unity",
      type: 'other',
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unrealengine/unrealengine-original.svg",
      title: "UE5",
      type: 'other',
    },
  ]

  return (
    <Container img={background}>

      <Header />

      <SectionBreaker>Academic Background</SectionBreaker>
      <Text><strong>Instituto Brasileiro de Mercado de Capitais IBMEC</strong> – RJ, Brazil</Text>
      <Text>BS Production Engineering</Text>

      <SectionBreaker>Professional Experience</SectionBreaker>
      <Text><strong>Oficina Design</strong> – RJ, Brazil</Text>
      <Text><i>Entrepreneur</i></Text>

      <Text><strong>Estúdio OBJ</strong> – RJ, Brazil</Text>
      <Text><i>Production Analyst</i></Text>
      <Text>• Product traceability with the creation and implementation of documents and verification tools.</Text>
      <Text>• Discrimination of the production stages, and elaboration of the quality control of the products by process.</Text>
      <Text>• Installation of methods for reusing unfinished or skewed parts.</Text>
      <Text>• Development of technological solutions for inventory control and management, purchases of materials and equipment, and production planning and control.</Text>

      <SectionBreaker>Courses</SectionBreaker>
      <Text><strong>BI and Data Warehouse with SQL Server and Power BI</strong> – Alura</Text>
      <Text><strong>Python for Data Science</strong> – Alura</Text>
      <Text><strong>Python, C++, SQL and Java</strong> – Codecademy, Udemy and W3Schools</Text>
      <Text><strong>Fixed Incomes (Treasury bonds, CD and debentures)</strong> – XPInvestimentos</Text>
      <Text><strong>Master I (English proficiency)</strong> – Cultura Inglesa</Text>

      <SectionBreaker>Main Skills</SectionBreaker>
      <Skills>
        {skills.filter((value) => (value.type === 'main')).map((value, index) => {
          return <Skill skill={value} alt="" key={index} />
        })}
      </Skills>

      <SectionBreaker>Other Skills</SectionBreaker>
      <Skills>
        {skills.filter((value) => (value.type === 'other')).map((value, index) => {
          return <Skill skill={value} alt="" key={index} />
        })}
      </Skills>

      <SectionBreaker>Languages</SectionBreaker>
      <Language level={90}>English</Language>
      <Language level={100}>Portuguese</Language>
      <Language level={50}>Spanish</Language>
      <Language level={20}>Japanese</Language>
      <Language level={30}>French</Language>

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
    flex-wrap: wrap;
  }
`

const Text = styled.div`
  & {
    display: flex;
    justify-content: flex-start;
    white-space: pre;
  }
`