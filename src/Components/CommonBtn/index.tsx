import styled from "styled-components";

interface ICommonBtnProps {
  type: "submit" | "button" | "reset";
  name: string;
}

function CommonBtn({ type, name }: ICommonBtnProps) {
  return (
    <StyledButton type={type}>
      <StyledButtonP>{name}</StyledButtonP>
    </StyledButton>
  );
}

export default CommonBtn;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20.625rem;
  height: 2.25rem;
  margin: 0 auto;

  border: 1px solid ${({ theme }) => theme.color.lineCOlorLight};
  border-radius: ${({ theme }) => theme.borderRadius.button};

  font-size: 1rem;
  background-color: ${({ theme }) => theme.color.bgColorLight};
  transition: .5s;
  :hover{
    background-color: ${({theme}) => theme.color.brandColorLight};
    border-color: ${({theme}) => theme.color.lineColorMiddle};
  }
`;

const StyledButtonP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fontSize2};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.fontColorGrey};
  margin: 0 auto;
`;
