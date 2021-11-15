import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #645cff;
  --white: #fff;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f2f4f8;
}

img {
  width: 100%;
  display: block;
}
`;

export default GlobalStyles;
