import styled from "styled-components"

export default function Header() {
  return (
    <Container>
      <div>About Me</div>
      <div>CV</div>
      <div>Portfolio</div>
      <div>Contact</div>
    </Container>
  )
};

const Container = styled.div`
  & {
    position: fixed;
    top: 0;
    left: 0;

    height: 70px;
  }
`