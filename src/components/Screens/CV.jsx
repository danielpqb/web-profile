import styled from "styled-components"

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
    <Container>

      <Header />

      <SectionBreaker>Academic Background</SectionBreaker>
      <Text>
        <h1>IBMEC<em>RJ, Brazil</em></h1>
        <h2>BS Production Engineering</h2>
      </Text>

      <SectionBreaker>Professional Experience</SectionBreaker>
      <Text>
        <h1>Oficina Design<em>RJ, Brazil</em></h1>
        <h2>Entrepreneur</h2>
      </Text>
      <br />

      <Text>
        <h1>Estúdio OBJ<em>RJ, Brazil</em></h1>
        <h2>Production Analyst</h2>
        <h3>• Product traceability with the creation and implementation of documents and verification tools.</h3>
        <h3>• Discrimination of the production stages, and elaboration of the quality control of the products by process.</h3>
        <h3>• Installation of methods for reusing unfinished or skewed parts.</h3>
        <h3>• Development of technological solutions for inventory control and management, purchases of materials and equipment, and production planning and control.</h3>
      </Text>
      <br />

      <SectionBreaker>Courses</SectionBreaker>
      <Text>
        <h4>BI and Data Warehouse with SQL Server and Power BI<em>Alura</em></h4><br />
        <h4>Python for Data Science<em>Alura</em></h4><br />
        <h4>Python, C++, SQL and Java<em>Udemy</em></h4><br />
        <h4>Fixed Incomes (Treasury bonds, CD and debentures)<em>XPI</em></h4><br />
        <h4>Master I (English proficiency)<em>Cultura <br /> Inglesa</em></h4>
      </Text>

      <SectionBreaker>Main Skills</SectionBreaker>
      <Skills>
        {skills.filter((value) => (value.type === 'main')).map((value, index) => {
          return <Skill height={90} skill={value} alt="" key={index} />
        })}
      </Skills>

      <SectionBreaker>Other Skills</SectionBreaker>
      <Skills>
        {skills.filter((value) => (value.type === 'other')).map((value, index) => {
          return <Skill height={90} skill={value} alt="" key={index} />
        })}
      </Skills>

      <SectionBreaker>Languages</SectionBreaker>
      <Language level={80}>English</Language>
      <Language level={100}>Portuguese</Language>
      <Language level={50}>Spanish</Language>
      <Language level={20}>Japanese</Language>
      <Language level={30}>French</Language>

    </Container>
  )
};

const Container = styled.div`
  & {
    width: 1100px;
    min-height: 100vh;

    flex-direction: column;
    justify-content: flex-start;

    padding: 20px;

    @media (max-width: 1100px) {
      width: calc(100vw - (100vw - 100%));
    }
  }

  em {
    position: absolute;
    right: 0;

    font-style: italic;
  }
`

const Skills = styled.div`
  & {
    flex-wrap: wrap;
  }
`

const Text = styled.div`
  & {
    position: relative;

    flex-direction: column;
    align-items: flex-start;

    text-align: start;
    white-space: pre-wrap;
  }

  * {
    display: flex;
    align-items: center;
    font-family: 'Calibri';
  }

  h1 {    
    font-size: calc(var(--fontsize) + 6px);
    font-weight: bold;
  }

  h2 {
    font-size: calc(var(--fontsize) + 2px);
    font-style: italic;
  }

  h3 {
    line-height: 20px;
    
    margin-left: 5px;
    margin-bottom: 5px;
  }

  h4 {
    font-size: calc(var(--fontsize) + 2px);
    font-style: italic;

    padding-right: 60px;

    width: 100%;
    height: 50px;
    
    border-bottom: 1px solid white;
  }
`