import React from "react";
import styled from "styled-components";
import VideoBackground from "../common/Videobackground";

export default function PreviewVideo() {
  return (
    <Container>
      <td colSpan={3}>
        <VideoBackground src={"videos/background.mp4"} />
      </td>
    </Container>
  );
}

const Container = styled.tr`
  & {
  }

  &:hover {
    cursor: pointer;
    opacity: ${({ isHidden }) => (isHidden ? "0.6" : "1")};
  }

  div {
    flex-wrap: wrap;
    position: relative;
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

    position: relative;

    overflow: hidden;
  }
`;
