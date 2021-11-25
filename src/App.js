import { useState, useEffect } from "react";
// https://styled-components.com/docs/tooling#babel-macro
import styled, { ThemeProvider } from "styled-components/macro";
import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";
import ComplexTitle from "./components/ComplexTitle";
import Card from "./components/Card";
import Loading from "./components/Loading";
import GlobalStyles from "./GlobalStyles";

const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const baseTheme = {
  color: "#222",
  background: "#fff",
};

const darkTheme = {
  color: "#fff",
  background: "#222",
};

const Container = styled.div`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  const [theme, setTheme] = useState(baseTheme);

  function toggleTheme() {
    theme === baseTheme ? setTheme(darkTheme) : setTheme(baseTheme);
  }

  useEffect(function () {
    if (dark) {
      setTheme(darkTheme);
    } else {
      setTheme(baseTheme);
    }
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <BasicTitle>Styled Components</BasicTitle>
          <BasicTitle special>Special Styled Component</BasicTitle>
          {/* https://styled-components.com/docs/api#as-polymorphic-prop */}
          <DefaultButton as="a" href="https://github.com/mshuber1981">
            GitHub/mshuber1981
          </DefaultButton>
          <HipsterButton onClick={toggleTheme}>
            Toggle Theme ({theme === baseTheme ? "Light" : "Dark"})
          </HipsterButton>
          <DefaultButton large onClick={() => alert("I am a huge button!")}>
            I am a large button
          </DefaultButton>
          <ComplexTitle title={"Complex Title"} />
          <Card />
          <Loading />
          {/* https://styled-components.com/docs/api#css-prop */}
          <div
            css={`
              color: green;
              margin: 1rem 0;
            `}
          >
            <h2>Hello World</h2>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
