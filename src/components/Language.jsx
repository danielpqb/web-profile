import styled from "styled-components"

export default function Language({ level, children }) {
  return (
    <Container>
      <Name>{children}:</Name>
      <KnowledgeBar level={level}>
        <div></div>
      </KnowledgeBar>
    </Container>
  )
};

const Container = styled.div`
  & {
  }
`

const Name = styled.div`
  & {
    min-width: 130px;
    max-width: 130px;
    justify-content: flex-end;
  }
`

const KnowledgeBar = styled.div`
  & {
    justify-content: flex-start;

    background-color: rgba(29, 49, 230, 0.2);

    height: 10px;
    width: 50%;

    border-radius: 8px;

    margin: 0px 10px;
  }

  div {
    background-color: #1d31e6;
    
    border-radius: 8px;

    width: ${({ level }) => `${level}%`};
  }
`