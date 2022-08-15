import React from 'react'
import styled from 'styled-components'

export default function MyTable({ headers, lines }) {

    function writeLine({ deploy, repo, description, techs }, index) {
        return (
            <tr key={index}>
                <td>
                    <a href={deploy.href}>{deploy.name}</a>
                </td>
                <td>
                    <a href={repo.href}>
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </td>
                <td>{description}</td>
                <td>
                    {techs.map((href, index) => {
                        return <img key={index} src={href} alt="" />
                    })}
                </td>
            </tr>
        )
    }

    return (
        <Container>
            <table>
                <tbody>
                    <tr>
                        {headers.map((value, index) => { return <th key={index}>{value}</th> })}
                    </tr>

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
  }

  img {
    max-width: 34px;
    max-height: 34px;
    vertical-align: middle;
    object-fit: contain;
  }

  ion-icon {
    font-size: calc(var(--fontsize) + 12px);
  }

  a {
    color: rgb(176, 197, 255);
  }

  td {

    border: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid rgba(255, 255, 255, 0.7);

    text-align: center;
    vertical-align: middle;

    padding: 8px;
    border-radius: 4px;
  }
`