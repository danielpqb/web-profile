import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyles"
import UserContext from '../Context/UserContext'

import Home from "./Screens/Home";
import Portfolio from "./Screens/Portfolio";
import CV from "./Screens/CV";

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <UserContext.Provider value={{}}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cv" element={<CV />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Home />}></Route>
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