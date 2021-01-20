/* eslint-disable no-param-reassign */
import React, { useEffect, useRef, InputHTMLAttributes, useState } from 'react';
import { useField } from '@unform/core';

import Lottie from 'react-lottie';
import animationData from '../../animations/checkbox.json';
import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}
const CheckboxInput: React.FC<Props> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [checked, setChecked] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const { fieldName, registerField, defaultValue = [] } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      {options.map((option, index) => (
        <label htmlFor={option.id} key={option.id}>
          <button
            onClick={() => {
              const reverseAnimation = -1;
              const normalAnimation = 1;

              setChecked(!checked);

              setAnimationState({
                ...animationState,
                isStopped: false,
                direction:
                  animationState.direction === normalAnimation
                    ? reverseAnimation
                    : normalAnimation,
              });
            }}
            type="button"
          >
            <Lottie
              options={defaultOptions}
              width={22}
              height={22}
              direction={animationState.direction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
            <input
              checked={checked}
              ref={ref => {
                inputRefs.current[index] = ref as HTMLInputElement;
              }}
              value={option.value}
              type="checkbox"
              id={option.id}
              {...rest}
            />
          </button>
          {option.label}
        </label>
      ))}
    </Container>
  );
};
export default CheckboxInput;
