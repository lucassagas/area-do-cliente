import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  width?: string;
}

export const Label = styled.span`
  color: var(--text);
  font-weight: 400;
`;

export const Container = styled.div<ContainerProps>`
  background: var(--background);
  border-radius: 10px;
  padding: 10px;

  textarea {
    border: 0;
    width: 100%;
    resize: none;
    background: transparent;
  }

  ${props =>
    props.width
      ? css`
          width: ${props.width};
        `
      : css`
          width: '100%';
        `};

  border: 1px solid var(--lightgray);
  color: var(--lightgray);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 15px;
  }

  svg {
    margin-right: 10px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--error);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--orange);
      border-color: var(--orange);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--orange);
    `}

    input {
    background: transparent;
    border: 0;
    color: var(--text);
    width: 100%;

    &::placeholder {
      color: var(--lightgray);
    }
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--error);
    color: var(--background);

    &::before {
      border-color: var(--error) transparent;
    }
  }
`;
