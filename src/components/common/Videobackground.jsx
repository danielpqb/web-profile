import styled from "styled-components";

export default function VideoBackground({ src }) {
  return (
    <Container
      autoPlay
      loop
      muted
    >
      <source src={src}></source>
    </Container>
  );
}

const Container = styled.video`
  & {
    width: 100%;
  }
`;