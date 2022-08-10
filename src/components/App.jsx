import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyles"
import UserContext from '../Context/UserContext'

import Home from "./Home";

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <UserContext.Provider value={{}}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<><Home /><Home /></>}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
  }
`