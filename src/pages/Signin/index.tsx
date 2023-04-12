import React, { useCallback, useState } from "react";
import Image from "next/image";
import LoginLottie from "src/Components/Common/LoginLottie";
import animationData from "src/assets/lottieJSON/collabo.json";
import animationDatatwo from "src/assets/lottieJSON/rocket.json";
import styled from "styled-components";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/constants/firebaseConfig";
import CommonInputForm from "src/Components/CommonInputForm";
import CommonBtn from "src/Components/CommonBtn";
import GoogleLogin from "src/Components/GoogleLogin";
import GithubLogin from "src/Components/GithubLogin";

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
      <StyledContainer>
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
          <div>
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
              <CommonBtn type="submit" name="로그인" />
            </form>
            <StyledH3>로그인</StyledH3>
          <GoogleLogin />
          <GithubLogin />
          </div>
        </StyledLoginDiv>
        {/* Login Footer Part */}
      </StyledContainer>
    </>
  );
}

export default Signin;

const StyledContainer = styled.div`
  width: 90rem;
  height: 56.25rem;
`;

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

const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.color.black};
`;
