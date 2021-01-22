import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  width?: string;
}

interface InfoProps {
  info: boolean;
}

export const Label = styled.span<InfoProps>`
  color: var(--text);
  font-weight: 400;
  position: static;
  margin-bottom: ${props => (props.info ? '-10px;' : 0)};
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 10px;
`;

export const Container = styled.div<ContainerProps>`
  background: var(--background);
  border-radius: 10px;
  padding: 10px;
  max-height: 40px;

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
export const Info = styled(Error)`
  > svg {
    &:hover {
      fill: var(--tooltipbg);

      transition: all 0.3s;
    }
  }
  > span {
    background: var(--tooltipbg);
    &::before {
      border-color: var(--tooltipbg) transparent;
    }
  }
`;
