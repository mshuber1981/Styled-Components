import styled from "styled-components/macro";
import card from "../card.jpeg";

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  margin: 1rem auto;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    background: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 4rem;
    h4 {
      text-transform: capitalize;
      /* Target h4 */
      &::before {
        content: "Name : ";
        color: var(--primary-color);
      }
    }
    p {
      color: var(--primary-color);
      font-weight: 700;
    }
    /* Target footer element */
    &:hover {
      background: red;
    }
  }
  transition: all 0.5s ease-in-out;
  /* Target the article element */
  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export default function Card() {
  return (
    <StyledCard>
      <img src={card} alt="Card" />
      <footer>
        <h4>Product Name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  );
}
