import styled from "styled-components";

import Header from "../Header";
import ProjectsTable from "../ProjectsTable/ProjectsTable";
import SectionBreaker from "../SectionBreaker";

import { pinned } from "../../data/projects/pinned";
import { others } from "../../data/projects/others";
import { libs } from "../../data/projects/libs";

export default function Portfolio() {
  return (
    <Container>
      <Header />

      <SectionBreaker first={true}>Proudest Projects</SectionBreaker>
      <ProjectsTable projects={pinned} />

      <SectionBreaker first={true}>NPM Libraries</SectionBreaker>
      <ProjectsTable projects={libs} />
      
      <SectionBreaker first={true}>Others</SectionBreaker>
      <ProjectsTable projects={others} />

      <SectionBreaker>Github Stats</SectionBreaker>
      <GitStats>
        <a
          href="http://www.github.com/danielpqb"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=danielpqb&amp;show_icons=true&amp;hide=&amp;count_private=true&amp;title_color=3382ed&amp;text_color=ffffff&amp;icon_color=3382ed&amp;bg_color=171717&amp;hide_border=true&amp;show_icons=true"
            alt=""
          />
        </a>

        <a
          href="http://www.github.com/danielpqb"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=danielpqb&amp;stroke=ffffff&amp;background=171717&amp;ring=3382ed&amp;fire=3382ed&amp;currStreakNum=ffffff&amp;currStreakLabel=3382ed&amp;sideNums=ffffff&amp;sideLabels=ffffff&amp;dates=ffffff&amp;hide_border=true"
            alt=""
          />
        </a>

        <a
          href="https://github.com/danielpqb"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=danielpqb&amp;layout=compact&amp;title_color=3382ed&amp;text_color=ffffff&amp;icon_color=3382ed&amp;bg_color=171717&amp;hide_border=true&amp;locale=en&amp;custom_title=Top%20%Languages"
            alt=""
          />
        </a>
      </GitStats>

      <a
        href="https://github.com/danielpqb?tab=followers"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://img.shields.io/github/followers/danielpqb?logo=github&amp;style=for-the-badge&amp;color=3382ed&amp;labelColor=171717"
          alt=""
        />
      </a>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(70vw - (100vw - 100%));
    min-height: 100vh;

    flex-direction: column;
    justify-content: flex-start;

    padding: 20px;
    padding-top: 90px;

    @media (max-width: 1100px) {
      width: calc(100vw - (100vw - 100%));
    }
  }
`;

const GitStats = styled.div`
  & {
    flex-wrap: wrap;
  }

  a {
    height: 175px;
    padding: 5px;
  }

  @media (max-width: 1100px) {
    & {
      flex-direction: column;
    }

    a {
      height: auto;
    }
  }
`;
