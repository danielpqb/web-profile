import React from 'react'
import styled from 'styled-components'

import Skill from "./Skill"

export default function MyTable({ headers, lines }) {

    function writeLine({ deploy, repo, description, techs }, index) {
        return (
            <>
                <tr key={index}>
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
                </tr>
                <tr>
                    <td colSpan={3}>
                        <div>
                            {techs.map((tech, index) => {
                                return <Skill height={80} fontSizeOffset={-2} skill={tech} key={index} alt="" />
                            })}
                        </div>
                    </td>
                </tr>
                <tr></tr>
            </>
        )
    }

    return (
        <Container>
            <table>
                {/* <tr>
                    {headers.map((value, index) => { return <th key={index}>{value}</th> })}
                </tr> */}

                <tbody>
                    {lines.map((value, index) => {
                        return writeLine(value, index)
                    })}
                </tbody>
            </table>
        </Container>
    )
};

const Container = styled.table`
  & {
    display: grid;
    border-collapse: collapse;
    width: 100%;

    margin: 10px 0px;

    border-collapse:separate;
    border-spacing:0 5px;
  }

  div {
    flex-wrap: wrap;
  }

  ion-icon {
    font-size: calc(var(--fontsize) + 12px);
  }

  a {
    font-size: calc(var(--fontsize) - 3px);

    color: rgb(176, 197, 255);
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

  tr {
    height: 80px;
  }

  tbody tr:nth-child(3n) {
    height: 25px;
  }
`