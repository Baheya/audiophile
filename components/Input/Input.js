import styled from 'styled-components';

const InputStyles = styled.input.attrs((props) => ({
  type: props.type,
  name: props.name,
  id: props.id,
  placeholder: props.placeholder,
}))`
  border: ${(props) =>
    props['aria-invalid'] ? '2px solid #cd2c2c' : '1px solid var(--grey-400)'};
  border-radius: 8px;
  width: 100%;
  height: 56px;
  font-family: 'Manrope';
  display: inline-block;
  font-size: 0.875rem;
  color: var(--black-200);
  padding-left: 24px;
  outline: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--grey-400);
  }
  :-ms-input-placeholder {
    color: var(--grey-400);
  }

  &:focus {
    border: 1px solid var(--orange-200);
    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--orange-200);
      margin-left: 24px;
    }
    :-ms-input-placeholder {
      color: var(--orange-200);
    }
  }
`;

const LabelStyles = styled.label`
  font-size: 0.75rem;
  margin-bottom: 10px;
  display: block;
  color: ${(props) => (props.error ? '#cd2c2c' : 'var(--black-200)')};
`;

const Wrapper = styled.div`
  position: relative;
`;

const ErrorStyles = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Manrope';
  font-weight: 200;
  font-size: 0.75rem;
  color: #cd2c2c;
`;

export const Input = ({
  label,
  type,
  name,
  id,
  placeholder,
  error,
  checkValidity,
}) => {
  return (
    <Wrapper>
      {error && <ErrorStyles id="errorMsg">Wrong Format</ErrorStyles>}
      <LabelStyles error={error}>{label}</LabelStyles>
      <InputStyles
        aria-required="true"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        aria-invalid={error}
        onBlur={checkValidity}
        aria-errormessage="errorMsg"
      />
    </Wrapper>
  );
};
