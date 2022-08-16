import React from 'react'
import styled from "styled-components"

export default function Main({ deploy, repo, description }) {
  return (
    <Container>
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
    </Container>
  )
};

const Container = styled.tr`
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