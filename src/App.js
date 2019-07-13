import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Button>Hello</Button>
      <Button danger>Hi</Button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 1000%;
  background-color: #bdc3c7;
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
`;

export default App;
