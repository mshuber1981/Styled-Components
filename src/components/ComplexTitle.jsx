import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary-color);
    margin: 0.5rem auto;
  }
`;

export default function ComplexTitle({ title, element }) {
  return (
    <Wrapper>
      {element === "h1" ? <h1>{title}</h1> : <h2>{title}</h2>}
      <div className="underline"></div>
    </Wrapper>
  );
}
