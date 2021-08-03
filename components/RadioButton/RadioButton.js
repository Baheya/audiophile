import styled from 'styled-components';

const RadioControl = styled.span`
  display: grid;
  place-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 0.1em solid var(--grey-400);
  transform: translateY(-0.05em);
`;

const RadioButtonStyles = styled.input.attrs((props) => ({
  type: 'radio',
  id: props.id,
  name: props.name,
  value: props.value,
}))`
  opacity: 0;
  width: 0;
  height: 0;

  & + span${RadioControl}::before {
    content: '';
    width: 8px;
    height: 8px;
    box-shadow: inset 8px 8px var(--orange-200);
    border-radius: 50%;
    transition: 180ms transform ease-in-out;
    transform: scale(0);
  }

  &:checked + ${RadioControl}::before {
    transform: scale(1) translateX(-0.4px) translateY(-0.2px);
  }
`;

const RadioInput = styled.span`
  display: flex;
`;

const Label = styled.label`
  /* width: 100%; */
  border: 1px solid var(--grey-400);
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--black-200);
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 12px;
  padding: 15px 10px;

  &:focus-within,
  &:hover {
    border: 1px solid var(--orange-200);
  }
`;

const RadioLabel = styled.span`
  line-height: 1;
  transition: 180ms all ease-in-out;
  opacity: 0.8;
  font-weight: 700;
`;

export function RadioButton({ label, htmlFor, id, name, value }) {
  return (
    <>
      <Label htmlFor={htmlFor}>
        <RadioInput>
          <RadioButtonStyles id={id} name={name} value={value} />
          <RadioControl />
        </RadioInput>
        <RadioLabel>{label}</RadioLabel>
      </Label>
    </>
  );
}
