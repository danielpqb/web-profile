import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --fontsize: 18px;
  }

  /* Hide scrollbar */
  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  * {
    background: none;
    border: none;
    margin: 0px;
    padding: 0px;

    vertical-align: middle;
    box-sizing: border-box;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: var(--fontsize);
    color: white;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    object-fit: contain;
  }

  input {
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    opacity: 0.6;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1100px) {
    :root {
      --fontsize: 16px;
    }
  }
`;