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
    margin-top: 2px;
  }
`

const Name = styled.div`
  & {
    min-width: 130px;
    max-width: 130px;
    justify-content: flex-end;

    font-size: calc(var(--fontsize) - 2px);   

    margin-bottom: 4px; 
  }
`

const KnowledgeBar = styled.div`
  & {
    justify-content: flex-start;

    background-color: rgba(130, 140, 230, 0.2);

    height: 10px;
    width: 40%;

    border-radius: 3px;

    margin: 0px 10px;
  }

  div {
    background-color: rgba(29, 49, 230, 0.6);
    
    border-radius: 8px;

    width: ${({ level }) => `${level}%`};
  }
`