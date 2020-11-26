import styled from 'styled-components';

export const Container = styled.button`
  background: var(--orange);
  height: 40px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: var(--lighttext);
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
