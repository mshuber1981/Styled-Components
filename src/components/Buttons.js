import styled from "styled-components/macro";

export const DefualtButton = styled.button`
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 10rem;
  margin: 1rem auto;
`;

// Extending DefaultButton with additional styles
export const HipsterButton = styled(DefualtButton)`
  width: 15rem;
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
`;
