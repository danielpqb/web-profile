import React, { useState } from 'react'
import styled from 'styled-components'

export default function HideContainer({ children, name, startHidden = true }) {

    const [hidden, setHidden] = useState(startHidden)

    return (
        <Container onClick={() => { setHidden(!hidden) }} hidden={hidden}>
            {hidden === false ?
                <>
                    {children}
                </>
                :
                <>
                    <h1>{name}</h1>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </>
            }
        </Container>
    )
}

const Container = styled.div`
    & {
        flex-wrap: wrap;
        flex-direction: ${({ hidden }) => hidden ? 'column' : 'row'};
        
        cursor: pointer;
    }

    &:hover {
        opacity: ${({ hidden }) => hidden ? '0.6' : '1'};
    }

    ion-icon {
        font-size: 25px;
    }
`