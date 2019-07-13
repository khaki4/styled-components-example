import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Button>Hello</Button>
      <Button danger rotationTime={5}>Hi</Button>

      <Anchor as={Button} href="https://google.com">
        Go to google
      </Anchor>
      <Anchor as="a" href="https://google.com">
        Go to google
      </Anchor>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 1000%;
  background-color: #bdc3c7;
`;
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  /* 동적 prop 분기 */
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
  animation-name: ${props => props.danger && rotation};
  animation-duration: ${props => `${props.rotationTime}s`};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

// const Anchor = Button.withComponent("a");
const Anchor = styled(Button)`
  text-decoration: none;
`;


export default App;
