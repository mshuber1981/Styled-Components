import styled, { css } from "styled-components/macro";
import ComplexTitle from "./ComplexTitle";

const Item = styled.li`
  list-style-type: none;
  margin: 1rem 0;
  ${({ odd }) => {
    return odd
      ? css`
          color: ${({ theme }) => theme.color};
          background: red;
          font-size: 1.5rem;
          padding: 1.5rem;
        `
      : css`
          color: ${({ theme }) => theme.color};
          padding: 1rem;
        `;
  }}
`;
const fruits = ["orange", "apple", "banana", "peach"];

export default function List() {
  return (
    <>
      <ComplexTitle title={"Simple List"} />
      <ul>
        {fruits.map((item, index) => (
          <Item key={index} odd={(index + 1) % 2 !== 0}>
            {item}
          </Item>
        ))}
      </ul>
    </>
  );
}
