import React, { useCallback, useEffect, useRef, useState } from 'react';

import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';
import { FiAlertCircle, AiOutlineQuestionCircle } from '../../styles/icon';

import { Container, Error, Label, Info } from './styles';

interface Props extends InputProps {
  name: string;
  width?: string;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  info?: string;
}

const Input: React.FC<Props> = ({
  name,
  icon: Icon,
  width,
  label,
  info,
  ...rest
}) => {
  const inputRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && (
        <Label info={!!info}>
          {label}
          {!!info && (
            <Info title={info}>
              <AiOutlineQuestionCircle color="var(--text)" size={20} />
            </Info>
          )}
        </Label>
      )}
      <Container
        id="defaultInput"
        width={width}
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
      >
        {Icon && <Icon size={20} />}
        <ReactInputMask
          type="text"
          ref={inputRef}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="var(--error)" size={20} />
          </Error>
        )}
      </Container>
    </>
  );
};

export default Input;
