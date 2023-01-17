import React, { Fragment } from "react";
import styled from "styled-components";

import Main from "./Main";
import Techs from "./Techs";
import Preview from "./Preview";

export default function ProjectsTable({ projects }) {
  function writeProject(
    { deploy, repo, description, techs, src, srcIsImage },
    index,
    isLast
  ) {
    return (
      <Fragment key={index}>
        <Main
          deploy={deploy}
          repo={repo}
          description={description}
        />

        <Preview
          src={src}
          srcIsImage={srcIsImage}
          deploy={deploy}
        />

        <Techs techs={techs} />

        <BlankSpace></BlankSpace>
      </Fragment>
    );
  }

  return (
    <Container>
      <tbody>
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;
          if (!(index % 2)) {
            return writeProject(project, index, isLast);
          }
          return <Fragment key={index} />;
        })}
      </tbody>
      <tbody>
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;
          if (index % 2) {
            return writeProject(project, index, isLast);
          }
          return <Fragment key={index} />;
        })}
      </tbody>
    </Container>
  );
}

const Container = styled.table`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }

  td {
    font-size: calc(var(--fontsize) - 3px);

    border: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid rgba(255, 255, 255, 0.7);

    text-align: center;
    vertical-align: middle;

    padding: 8px;
    border-radius: 4px;
  }

  @media (orientation: portrait) {
    & {
      display: table;
    }
    tbody {
      gap: 25px;
      margin: 0px 0px;
      padding: 0px 0px;
    }
  }
`;

const BlankSpace = styled.tr`
  & {
    height: 25px;
  }
`;
