import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';
import { FiAlertCircle } from '../../styles/icon';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  width?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, width, ...rest }) => {
  const InputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!InputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: InputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      width={width}
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
    >
      {Icon && <Icon size={20} />}
      <input
        type="text"
        ref={InputRef}
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
  );
};

export default Input;
