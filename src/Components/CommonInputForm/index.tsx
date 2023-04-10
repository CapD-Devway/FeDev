import { ChangeEvent } from "react";
import styled from "styled-components";

interface IInputFormProps {
  type: "text" | "email" | "password";
  id?: "Email" | "Password" | "Name";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: "Email" | "Password" | "Name";
}

interface IInputLabelProps {
  placeholder: "Email" | "Password" | "Name";
}

function CommonInputForm(
  { type, id, onChange, value, placeholder }: IInputFormProps,
//   { placeholder }: IInputLabelProps
) {
  return (
    <StyledWrapper>
      <StyledInputForm type={type} id={id} onChange={onChange} value={value} placeholder={placeholder} />
      {/* <label htmlFor={id}>
        <span>{id}</span>
      </label> */}
    </StyledWrapper>
  );
}

export default CommonInputForm;

const StyledWrapper = styled.div`
  width: 21.25rem;
  height: 2.875rem;
  margin: 0 auto;
`;

const StyledInputForm = styled.input`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 21.25rem;
  height: 2.875rem;
  padding: 0 0 0 1rem;

  font-size: ${({ theme }) => theme.fontSize.fontSize2};
  color: ${({ theme }) => theme.color.fontColorDark};

  border: 0.0625rem solid ${({ theme }) => theme.color.lineCOlorLight};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  // border-raidus input: 8px 추후 설정
  background-color: ${({ theme }) => theme.color.bgColorLight};
  ::placeholder {
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.color.fontColorLight};
  }
  ::placeholder-shown:not(:focus) + * {
    font-size: ${({ theme }) => theme.fontSize.fontSize1};
    opacity: 1;
    color: ${({ theme }) => theme.color.fontColorLight};
  }
  :focus {
    outline: none;
  }

  /* + label {
    display: block;
    position: absolute;
    text-align: left;
    font-weight: bold;
    font-size: 0.7rem;
    padding: 1rem 0;
    color: gray;
    margin-top: 0%.7rem;
    transition: all 0.25s;
    transform: translateY(-200%);
  }

  :focus + label {
    color: gray;
    transform: translateY(-210%);
    font-size: 0.7rem;
  } */
`;
