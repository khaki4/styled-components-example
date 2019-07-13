# Styled Components

## 기본 사용법

```javascript
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
```

## 컴포넌트 재활용, Override

```javascript
// styled component 는 {} 안에
<Anchor as={Button} href="https://google.com">
  Go to google
</Anchor>
// native element sms "" 안에
<Anchor as="a" href="https://google.com">
  Go to google
</Anchor>

// https://github.com/styled-components/styled-components/issues/1956#issuecomment-416591046
const Anchor = styled(Button)`
  text-decoration: none;
`;
```

## Global Style
- https://www.styled-components.com/docs/api
```javascript
import styled, { createGlobalStyle } from "styled-components";

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
      <Button danger>Hi</Button>
      <Anchor as={Button} href="https://google.com">
        Go to google
      </Anchor>
      <Anchor as="a" href="https://google.com">
        Go to google
      </Anchor>
    </Container>
  );
}
```

## Animation
```javascript
import styled, { createGlobalStyle, keyframes } from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Button>Hello</Button>
      <Button danger rotationTime={5}>Hi</Button>\
    </Container>
  );
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Button = styled.button`
  animation-name: ${props => props.danger && rotation};
  animation-duration: ${props => `${props.rotationTime}s`};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

```

## Extra Attribute
```javascript
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
```

## Mixins : css group
```javascript

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
  ${awesomeCard}
`;
```