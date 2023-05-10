import { Auth, sendPasswordResetEmail } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import animationDatatwo from "src/assets/lottieJSON/rocket.json";
import LoginLottie from "src/Components/Common/LoginLottie";
import CommonBtn from "src/Components/CommonBtn";
import CommonInputForm from "src/Components/CommonInputForm";
import { auth } from "src/constants/firebaseConfig";
import styled from "styled-components";

function ForgotPassword() {
  const [registeredEmail, setRegisteredEmail] = useState<string>("");

  const onRegisterEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setRegisteredEmail(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      sendPasswordResetEmail(auth, registeredEmail)
        .then(() => {
          alert("이메일을 확인해 주세요.");
        })
        .catch(() => {
          alert("등록되지 않은 이메일입니다.");
        });
    },
    [auth, registeredEmail]
  );

  return (
    <div>
      <StyledLogoBar>
        <Image
          src="/images/devwaylogo.png"
          alt="devway logo"
          width={170}
          height={44}
        />
      </StyledLogoBar>
      <StyledForgotDiv>
        <StyledLottieDIv>
          <LoginLottie lottieData={animationDatatwo} width={500} height={500} />
        </StyledLottieDIv>
        <StyledUserBorder>
          <Link href="/Signin">
            <StyledBackP>뒤로가기</StyledBackP>
          </Link>
          <StyledSignUpH3>비밀번호 찾기</StyledSignUpH3>
          <form onSubmit={onSubmit}>
            <CommonInputForm
              type="email"
              id="Email"
              onChange={onRegisterEmail}
              value={registeredEmail}
              placeholder="Email"
            />
            <StyledAlertP>
              이메일 입력하시면 비밀번호 변경 후에 로그인 가능해요.
            </StyledAlertP>
            <CommonBtn type="submit" name="이메일 인증 발송" />
          </form>
        </StyledUserBorder>
      </StyledForgotDiv>
    </div>
  );
}

export default ForgotPassword;

const StyledLogoBar = styled.div`
  width: 88rem;
  height: 5.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledForgotDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLottieDIv = styled.div`
  margin-top: 0.625rem;
`;

const StyledUserBorder = styled.div`
  margin-top: 3.125rem;
  width: 30.625rem;
  height: 22.75rem;
  border: 0.125rem solid ${({ theme }) => theme.color.brandColorLight};
  border-radius: ${({ theme }) => theme.borderRadius.container};
  padding: 4rem 3rem;
  box-shadow: rgba(172, 243, 162, 0.3) 0px 2px 8px 0px;
`;

const StyledBackP = styled.p`
  position: relative;
  top: -2.5rem;
  left: -1.25rem;
  font-size: ${({ theme }) => theme.fontSize.fontSize12};
  color: ${({ theme }) => theme.color.brandColorMedium};
  transition: all 0.3s;
  :hover {
    color: ${({ theme }) => theme.color.branchColorDeep};
  }
`;

const StyledSignUpH3 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fontSize24};
  color: ${({ theme }) => theme.color.black};
`;

const StyledAlertP = styled.p`
  margin-top: 1.25rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.fontSize12};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.6;
`;
