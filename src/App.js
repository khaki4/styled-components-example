import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const awesomeCard = css`
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled.div`
  height: 100vh;
  width: 1000%;
  background-color: #bdc3c7;
`;

const Input = styled.input.attrs({
  required: true
})`
  ${awesomeCard}
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Input placeholder="hello"/>
    </Container>
    </>
  );
}

export default App;
