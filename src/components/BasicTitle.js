import styled from "styled-components/macro";

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /* Passing props */
  color: ${({ special }) => (special ? "red" : "var(--primary-color)")};
`;

export default BasicTitle;
