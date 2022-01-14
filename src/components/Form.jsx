// https://styled-components.com/docs/tooling#babel-macro
import styled, { css } from "styled-components/macro";

const StyledDiv = styled.div`
  min-width: 30vw;
  background: ${({ theme }) => (theme.name === "light" ? "#222" : "#fff")};
  color: ${({ theme }) => (theme.name === "light" ? "#fff" : "#222")};
  padding: 2rem;
  margin: 1rem 0 2rem 0;
  h2 {
    margin: 0.5rem 0;
  }
  input {
    width: 75%;
    margin-right: 0.5rem;
  }
`;

// https://styled-components.com/docs/faqs#when-to-use-attrs
const Button = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  background: var(--primary-color);
  border: none;
  color: white;
  padding: 0.25rem;
  margin: 0.5rem 0;
  cursor: pointer;
  ${({ type }) => {
    return (
      type === "submit" &&
      // https://styled-components.com/docs/api#css-prop
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    );
  }}
`;

const StyledInput = styled.input.attrs((props) => {
  return {
    type: props.type || "text",
    placeholder: props.placeholder || "Please enter value",
  };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

export default function Form() {
  return (
    <StyledDiv>
      <Button onClick={() => alert(`type="button"`)}>Regular Button</Button>
      <form>
        <h2>Form</h2>
        <StyledInput />
        <StyledInput type="email" placeholder="Enter email" />
        <Button type="submit">Submit Button</Button>
      </form>
    </StyledDiv>
  );
}
