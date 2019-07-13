import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Input = styled.input.attrs({
  required: true
})`
  border-radius:5px;
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

const Container = styled.div`
  height: 100vh;
  width: 1000%;
  background-color: #bdc3c7;
`;


export default App;
