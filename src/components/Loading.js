import styled, { keyframes } from "styled-components";

const spinner = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid #ccc;
  border-radius: 50%;
  border-top-color: var(--primary-color);
  margin: 1rem 0;
  animation: ${spinner} 0.6s linear infinite;
`;

export default Loading;
