import React, { Fragment } from 'react'
import styled from 'styled-components'

import Main from './Main'
import Techs from './Techs'

export default function ProjectsTable({ projects }) {

  function writeProject({ deploy, repo, description, techs }, index, isLast) {
    return (
      <Fragment key={index}>
        <Main deploy={deploy} repo={repo} description={description} />

        <Techs techs={techs} />

        {!isLast &&
          <BlankSpace></BlankSpace>
        }
      </Fragment>
    )
  }

  return (
    <Container>
      <tbody>
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1
          return writeProject(project, index, isLast)
        })}
      </tbody>
    </Container >
  )
};

const Container = styled.table`
  & {
    width: 100%;
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
`

const BlankSpace = styled.tr`
  & {
    height: 25px;
  }
`