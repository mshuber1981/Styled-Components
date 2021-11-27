import styled from "styled-components";

const StyledDiv = styled.div`
  min-width: 30vw;
  background: ${({ theme }) => (theme.name === "light" ? "#222" : "#fff")};
  color: ${({ theme }) => (theme.name === "light" ? "#fff" : "#222")};
  padding: 2rem;
  margin: 1rem 0;
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
`;

export default function Form() {
  return (
    <StyledDiv>
      <Button onClick={() => alert(`type="button"`)}>Regular Button</Button>
      <form>
        <h2>Form</h2>
        <input type="text" />
        <Button type="submit">Submit Button</Button>
      </form>
    </StyledDiv>
  );
}
