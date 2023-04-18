import Link from "next/link";
import styled from "styled-components";

function BottomNav() {
  return (
    <StyledBottomNavWrapper>
      <StyledHr />
      <StyledNavTextDiv>
        <div>
          Copyright © 2023 Devway by Devway Team Inc. All rights reserved.
        </div>
        <StyledTextDiv>
          <Link href="/About">
            <StyledTextSpan>서비스소개</StyledTextSpan>
          </Link>
          <Link href="/Inquire">
            <StyledTextSpan>문의하기</StyledTextSpan>
          </Link>
        </StyledTextDiv>
      </StyledNavTextDiv>
    </StyledBottomNavWrapper>
  );
}

export default BottomNav;

const StyledBottomNavWrapper = styled.div`
  margin-top: 4rem;
`;

const StyledHr = styled.hr`
  border: 1px solid ${({ theme }) => theme.color.lineCOlorLight};
`;

const StyledNavTextDiv = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.fontSize12};
  color: ${({ theme }) => theme.color.fontColorGrey};
`;

const StyledTextDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 1.25rem;
`;

const StyledTextSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.fontSize14};
  transition: all 0.5s;
  :hover {
    color: ${({ theme }) => theme.color.fontColorDark};
  }
`;
