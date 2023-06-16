import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNavWrapper>
      <div>
        <Image
          src="/images/logo3.png"
          alt="로고 이미지"
          width={115}
          height={32}
        />
      </div>
      <div>
        <Link href="/">
          <StyledNavSpan>팀원 구하기</StyledNavSpan>
        </Link>
        <Link href="/TeamMate">
          <StyledNavSpan>팀 구하기</StyledNavSpan>
        </Link>
        <Link href="/Signin">
          <StyledNavSpan>로그인/회원가입</StyledNavSpan>
        </Link>
      </div>
    </StyledNavWrapper>
  );
}

export default Nav;

const StyledNavWrapper = styled.nav`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;
`;

const StyledNavSpan = styled.span`
  margin-right: 1.4rem;

  font-size: ${({ theme }) => theme.fontSize.fontSize16};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
  transition: all 0.5s;
  :hover {
    color: ${({ theme }) => theme.color.fontColorGrey};
  }
`;
