import { ChangeEvent } from "react";
import styled from "styled-components";

interface ITextAreaProps {
  count?: boolean;
  maxCount?: number;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({
  value,
  count,
  maxCount,
  placeholder,
  onChange,
}: ITextAreaProps) {
  return (
    <>
      <StyledTextArea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required
        maxLength={3000}
      />
      {count && <StyledCount>{`${value.length} / ${maxCount}`}</StyledCount>}
    </>
  );
}

export default TextArea;

const StyledTextArea = styled.textarea<ITextAreaProps>`
  width: 100%;
  min-height: 20rem;
  height: auto;
  padding: 0.875rem 1.25rem;
  margin-top: 1rem;

  box-sizing: border-box;
  resize: none;

  border: 1px solid ${({ theme }) => theme.color.borderColorLight};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.fontColorDark};
  background-color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.0125rem;

  ::placeholder {
    color: ${({ theme }) => theme.color.white};
    opacity: 0.6;
  }

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.brandColorLight};
  }
`;

const StyledCount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 0.8rem;
`;
