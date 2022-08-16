import React, { useState } from 'react'
import styled from "styled-components"

import Skill from '../Skill'

export default function Techs({ techs }) {
  const [hidden, setHidden] = useState(true)

  return (

    <Container onClick={() => { setHidden(!hidden) }}>
      <td colSpan={3}>
        {!hidden ?
          <div>
            {techs.map((tech, index) => {
              return <Skill height={80} fontSizeOffset={-2} skill={tech} key={index} alt="" />
            })}
          </div>
          :
          <div>
            <ion-icon name="chevron-down-outline"></ion-icon>
            <h1>Techs</h1>
          </div>
        }
      </td>
    </Container>

  )
};

const Container = styled.tr`
  & {

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