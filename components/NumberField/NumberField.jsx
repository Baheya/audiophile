import { useNumberField } from '@react-aria/numberfield';
import { useNumberFieldState } from '@react-stately/numberfield';
import { useRef } from 'react';
import styled from 'styled-components';
import { useButton } from '@react-aria/button';

const Wrapper = styled.div`
  max-width: 120px;
  position: relative;
`;

const Group = styled.div`
  background-color: var(--grey-300, #f1f1f1);
  padding: 0 0.3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
  width: 100%;

  justify-content: center;
`;

const Button = styled.button`
  background-color: var(--grey-300, #f1f1f1);
  border: none;
  display: block;
  flex-basis: 40px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  text-align: center;
  display: block;
  max-width: 100%;
  width: 100%;
`;

const VisuallyHiddenLabel = styled.label`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
  margin: -1px;
`;

export function NumberField(props) {
  let state = useNumberFieldState({ ...props, locale: 'en-US' });
  let inputRef = useRef();
  let incrRef = useRef();
  let decRef = useRef();
  let {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
  } = useNumberField(props, state, inputRef);

  let { buttonProps: incrementProps } = useButton(
    incrementButtonProps,
    incrRef
  );
  let { buttonProps: decrementProps } = useButton(decrementButtonProps, decRef);

  return (
    <Wrapper>
      <VisuallyHiddenLabel {...labelProps}>{props.label}</VisuallyHiddenLabel>
      <Group {...groupProps}>
        <Button {...decrementProps} ref={incrRef}>
          -
        </Button>
        <Input {...inputProps} ref={inputRef} />
        <Button {...incrementProps} ref={decRef}>
          +
        </Button>
      </Group>
    </Wrapper>
  );
}
