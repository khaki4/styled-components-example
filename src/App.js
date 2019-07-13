import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Card = styled.div`
  background-color: red;
`;

const Container = styled.div`
  height: 100vh;
  width: 1000%;
  background-color: pink;
  ${Card}:last-child {
    background-color: blue;
  }
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

function App() {
  return (
  <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Container>
        <Form/>
      </Container>
    </ThemeProvider>
  </>
  );
}

const Form = () => <Card>
  <Button>Hello</Button>
</Card>

export default App;
