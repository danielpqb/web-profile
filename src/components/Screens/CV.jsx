import styled from "styled-components";

import Header from "../Header";
import HideContainer from "../HideContainer";
import Language from "../Language";
import SectionBreaker from "../SectionBreaker";
import Skill from "../Skill";

import { mainSkills } from "../../data/skills/main";
import { otherSkills } from "../../data/skills/others";

export default function CV() {
  return (
    <Container>
      <Header />

      <h1>Daniel Pereira Queiroz Barros</h1>

      <SectionBreaker first={true}>Academic Background</SectionBreaker>
      <Text>
        <h1>
          IBMEC<em>RJ, Brazil</em>
        </h1>
        <h2>BS Production Engineering</h2>
      </Text>

      <SectionBreaker>Professional Experience</SectionBreaker>
      <Text>
        <h1>
          Oficina Design<em>RJ, Brazil</em>
        </h1>
        <h2>Entrepreneur</h2>
      </Text>
      <br />

      <Text>
        <h1>
          Estúdio OBJ<em>RJ, Brazil</em>
        </h1>
        <h2>Production Analyst</h2>
      </Text>

      <SectionBreaker>Courses</SectionBreaker>
      <Text>
        <h4>
          Full Stack Web Development<em>Driven</em>
        </h4>
        <br />
        <h4>
          BI and Data Warehouse with SQL Server and Power BI<em>Alura</em>
        </h4>
        <br />
        <h4>
          Master I (English proficiency)
          <em>
            Cultura <br /> Inglesa
          </em>
        </h4>
      </Text>

      <SectionBreaker>Main Skills</SectionBreaker>
      <HideContainer startHidden={false}>
        {mainSkills
          .map((value, index) => {
            return (
              <Skill
                height={90}
                skill={value}
                alt=""
                key={index}
              />
            );
          })}
      </HideContainer>

      <SectionBreaker>Other Skills</SectionBreaker>
      <HideContainer>
        {otherSkills
          .map((value, index) => {
            return (
              <Skill
                height={90}
                skill={value}
                alt=""
                key={index}
              />
            );
          })}
      </HideContainer>

      <SectionBreaker>Languages</SectionBreaker>
      <Language level={80}>English</Language>
      <Language level={100}>Portuguese</Language>
      <Language level={25}>French</Language>
      <Language level={25}>Spanish</Language>
      <Language level={10}>Japanese</Language>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: 1100px;
    min-height: 100vh;

    flex-direction: column;
    justify-content: flex-start;

    padding: 20px;
    padding-top: 90px;

    @media (max-width: 1100px) {
      width: calc(100vw - (100vw - 100%));
    }
  }

  & > h1 {
    display: flex;
    justify-content: center;

    margin-bottom: 10px;

    font-weight: bold;
    font-size: calc(var(--fontsize) + 26px);

    text-align: center;

    @media (max-width: 1100px) {
      font-size: 5.8vw;
    }
  }

  em {
    position: absolute;
    right: 0;

    font-style: italic;
  }
`;

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
    font-family: "Calibri";
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
`;
