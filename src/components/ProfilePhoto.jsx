import styled from "styled-components"

import profilePhoto from '../assets/img/DanielPerfil.jpg'

export default function ProfilePhoto() {
  return (
    <Container>
      <img src={profilePhoto} alt="" />
    </Container>
  )
};

const Container = styled.div`
  & {
    padding: 15px;
    width: 200px;
    height: 200px;
  }

  img {
    border-radius: 50%;
  }
`