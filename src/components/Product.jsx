import styled from "styled-components/macro";

const StyledProduct = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => (theme.name === "light" ? "#fff" : "#222")};
  background: ${({ theme }) => (theme.name === "light" ? "#222" : "#fff")};

  h4 {
    text-transform: capitalize;
  }

  p {
    color: ${({ price }) => {
      if (price < 100) return "green";
      if (price > 500) return "red";
    }};
  }
`;

export default function Product({ name, price }) {
  return (
    <div>
      <StyledProduct price={price}>
        <h4>{name}</h4>
        <p>${price}</p>
      </StyledProduct>
    </div>
  );
}
