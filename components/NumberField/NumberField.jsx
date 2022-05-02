import styled from 'styled-components';
import { useButton } from '@react-aria/button';
import { useNumberField } from '@react-aria/numberfield';
import { useNumberFieldState } from '@react-stately/numberfield';
import { useRef } from 'react';

import { VisuallyHidden } from '@components/VisuallyHidden';

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
      <VisuallyHidden tag="label" {...labelProps}>
        {props.label}
      </VisuallyHidden>
      <Group {...groupProps}>
        <Button
          {...decrementProps}
          onClick={props.decreaseQuantity}
          ref={incrRef}
        >
          -
        </Button>
        {props.compact ? (
          <Input
            {...inputProps}
            ref={inputRef}
            value={props.product.quantity}
          />
        ) : (
          <Input {...inputProps} ref={inputRef} />
        )}
        <Button
          {...incrementProps}
          onClick={props.increaseQuantity}
          ref={decRef}
        >
          +
        </Button>
      </Group>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 120px;
  position: relative;

  .cart-item & {
    max-width: 96px;
  }
`;

const Group = styled.div`
  background-color: var(--grey-300, #f1f1f1);
  padding: 0 0.3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
  width: 100%;

  justify-content: center;

  .cart-item & {
    height: 32px;
  }
`;

const Button = styled.button`
  background-color: var(--grey-300, #f1f1f1);
  border: none;
  display: block;
  flex-basis: 40px;
  cursor: pointer;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  text-align: center;
  display: block;
  max-width: 100%;
  width: 100%;
`;
