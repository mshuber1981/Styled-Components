import styled, { css } from "styled-components";

export const DefaultButton = styled.button`
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  display: block;
  width: 12rem;
  margin: 1rem 0;
  /* https://styled-components.com/docs/api#css */
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
        `}
`;

// Extending DefaultButton with additional styles
export const HipsterButton = styled(DefaultButton)`
  width: 15rem;
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
`;
