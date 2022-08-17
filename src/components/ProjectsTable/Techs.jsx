import React, { useState } from 'react'
import styled from "styled-components"

import Skill from '../Skill'

export default function Techs({ techs }) {
  const [hidden, setHidden] = useState(false)

  return (
    <Container onClick={() => { setHidden(!hidden) }} isHidden={hidden}>
      <td colSpan={3}>
        {hidden === false ?
          <Tech>
            {techs.map((tech, index) => {
              return <Skill height={80} fontSizeOffset={-2} skill={tech} key={index} alt="" />
            })}
          </Tech>
          :
          <Tech>
            <ion-icon name="chevron-down-outline"></ion-icon>
            <h1>Techs</h1>
          </Tech>
        }
      </td>
    </Container>
  )
};

const Container = styled.tr`
  & {
  }
  
  &:hover {
    cursor: pointer;
    opacity: ${({ isHidden }) => isHidden ? '0.6' : '1'};
  }
  
  div {
    flex-wrap: wrap;
  }
  
  h1 {
    font-size: calc(var(--fontsize) - 3px);
  }
  
  ion-icon {
    margin-right: 5px;
    font-size: 20px;
  }
  
  && td {
    border-top: none;
    padding: 0px;
    border-radius: 0px 0px 4px 4px;
  }
  `

const Tech = styled.div`
  & {
  }
`