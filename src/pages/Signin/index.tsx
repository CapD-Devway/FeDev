import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import animationDatatwo from "src/assets/lottieJSON/rocket.json";
import LoginLottie from "src/Components/Common/LoginLottie";
import CommonBtn from "src/Components/CommonBtn";
import CommonInputForm from "src/Components/CommonInputForm";
import GithubLogin from "src/Components/GithubLogin";
import GoogleLogin from "src/Components/GoogleLogin";
import BottomNav from "src/Components/Nav/BottomNav";
import { auth } from "src/constants/firebaseConfig";
import { UserContext } from "src/provider/authProvider";
import styled from "styled-components";

function Signin() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 이메일 입력 부분
  const onSetEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  }, []);

  // 비밀번호 입력 부분
  const onSetPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setPassword(e.target.value);
    },
    []
  );

  // firebase에서 제공하는 로그인 함수 사용
  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/");
        console.log(user.displayName);
        console.log(UserContext.displayName);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div>
        {/* Login Nav Bar Part */}
        <StyledLogoBar>
          <Image
            src="/images/devwaylogo.png"
            alt="devway logo"
            width={170}
            height={44}
          />
        </StyledLogoBar>
        {/* Login Body Part */}
        <StyledLoginDiv>
          <StyledLottieDIv>
            <LoginLottie
              lottieData={animationDatatwo}
              width={500}
              height={500}
            />
          </StyledLottieDIv>
          <StyledUserBorder>
            <StyledSignUpH3>로그인</StyledSignUpH3>
            <form onSubmit={onLogin}>
              <CommonInputForm
                type="email"
                id="Email"
                onChange={onSetEmail}
                value={email}
                placeholder="Email"
              />
              <CommonInputForm
                type="password"
                id="Password"
                onChange={onSetPassword}
                value={password}
                placeholder="Password"
              />
              <Link href="/ForgotPassword">
                <StyledAlreadyP>비밀번호 잊어버리셨나요?</StyledAlreadyP>
              </Link>
              <CommonBtn type="submit" name="로그인" />
              <Link href="/Signup">
                <StyledAlreadyDiv>계정이 없으신가요?</StyledAlreadyDiv>
              </Link>
            </form>
            <StyledSplitDiv>또는</StyledSplitDiv>
            <StyledSocialLoginDiv>
              <GoogleLogin />
              <GithubLogin />
            </StyledSocialLoginDiv>
          </StyledUserBorder>
        </StyledLoginDiv>
        {/* Login Footer Part */}
        <BottomNav />
      </div>
    </>
  );
}

export default Signin;

const StyledLogoBar = styled.div`
  width: 88rem;
  height: 5.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLoginDiv = styled.div`
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
  height: 38.25rem;
  border: 0.125rem solid ${({ theme }) => theme.color.brandColorLight};
  border-radius: ${({ theme }) => theme.borderRadius.container};
  padding: 4rem 3rem;
  box-shadow: rgba(172, 243, 162, 0.3) 0px 2px 8px 0px;
`;

const StyledSignUpH3 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fontSize24};
  color: ${({ theme }) => theme.color.black};
`;

const StyledAlreadyDiv = styled.div`
  margin-top: 1.25rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.fontSize12};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.6;
  transition: all 0.5s;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const StyledAlreadyP = styled.p`
  margin-top: 1.25rem;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.fontSize12};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.6;
  transform: translateX(-1.875rem);
  transition: all 0.5s;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const StyledSplitDiv = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  font-size: 12px;
  margin: 1.25rem 0rem;
  ::before,
  ::after {
    content: "";
    flex-grow: 1;
    background: ${({ theme }) => theme.color.lineColorMiddle};
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 1.25rem 16px;
  }
`;

const StyledSocialLoginDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
