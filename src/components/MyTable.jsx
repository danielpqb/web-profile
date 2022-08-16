import React from 'react'
import styled from 'styled-components'

import Skill from "./Skill"

export default function MyTable({ projects }) {

    function writeProject({ deploy, repo, description, techs }, index) {
        return (
            <>
                <MainContent key={index}>
                    <td>
                        <a href={deploy.href}>
                            {deploy.name}
                        </a>
                    </td>
                    <td>
                        <a href={repo.href}>
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </td>
                    <td>{description}</td>
                </MainContent>

                <Techs>
                    <td colSpan={3}>
                        <div>
                            {techs.map((tech, index) => {
                                return <Skill height={80} fontSizeOffset={-2} skill={tech} key={index} alt="" />
                            })}
                        </div>
                    </td>
                </Techs>

                <BlankSpace></BlankSpace>
            </>
        )
    }

    return (
        <Container>
            <tbody>
                {projects.map((value, index) => {
                    return writeProject(value, index)
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

const MainContent = styled.tr`
  & {
    height: 70px;
  }

  a {
    font-size: calc(var(--fontsize) - 3px);
    color: rgb(176, 197, 255);
  }

  ion-icon {
    font-size: calc(var(--fontsize) + 12px);
  }
`

const Techs = styled.tr`
  & {
    
  }

  div {
    flex-wrap: wrap;
  }
`

const BlankSpace = styled.tr`
  & {
    height: 25px;
  }
`