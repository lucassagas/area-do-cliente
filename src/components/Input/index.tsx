import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';
import {
  FiAlertCircle,
  RiEyeCloseLine,
  AiOutlineEye,
  AiOutlineQuestionCircle,
} from '../../styles/icon';
import { useTheme } from '../../hooks/themes';

import { Container, Error, Label, Info } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  width?: string;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  password?: boolean;
  calendar?: boolean;
  info?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  width,
  label,
  password,
  calendar,
  info,
  ...rest
}) => {
  const InputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [seePassword, setSeePassword] = useState(password);
  const { themeName } = useTheme();

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!InputRef.current?.value);
  }, []);

  const handleSeePassword = useCallback(() => {
    setSeePassword(!seePassword);
  }, [seePassword]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: InputRef.current,
      path: 'value',
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
        theme={themeName}
        calendar={calendar}
      >
        {Icon && <Icon size={20} />}
        <input
          type={seePassword ? 'password' : 'text'}
          ref={InputRef}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
        />
        {password && (
          <span>
            {seePassword ? (
              <AiOutlineEye
                onClick={handleSeePassword}
                size={20}
                color="var(--text)"
              />
            ) : (
              <RiEyeCloseLine
                onClick={handleSeePassword}
                size={20}
                color="var(--text)"
              />
            )}
          </span>
        )}
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
