import { createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";
import animationDatatwo from "src/assets/lottieJSON/rocket.json";
import LoginLottie from "src/Components/Common/LoginLottie";
import CommonBtn from "src/Components/CommonBtn";
import CommonInputForm from "src/Components/CommonInputForm";
import GithubLogin from "src/Components/GithubLogin";
import GoogleLogin from "src/Components/GoogleLogin";
import { auth } from "src/constants/firebaseConfig";
import { AuthContext } from "src/context/authContext";
import styled from "styled-components";

function Signup() {
  const router = useRouter();
  const userInfo = useContext(AuthContext);

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [regitserPassword, setRegisterPassword] = useState<string>("");
  const [registerName, setRegisterName] = useState<string | null>(null);

  // 이메일 입력 함수
  const onRegisterEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setRegisterEmail(e.target.value);
    },
    []
  );
  // 비밀번호 입력 함수
  const onRegisterPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setRegisterPassword(e.target.value);
    },
    []
  );
  // 닉네임 입력 함수
  const onRegisterName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setRegisterName(e.target.value);
    },
    []
  );

  // firebase에서 제공하는 회원가입 함수 사용
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      createUserWithEmailAndPassword(auth, registerEmail, regitserPassword)
        .then((userCredential) => {
          // firebase에서 반환된 user 객체에서 displayName 속성 값을 가져옴
          const displayNameFromFirebase = userCredential.user.displayName;
          // displayNameFromFirebase가 null 또는 undefined인 경우, 빈 문자열로 설정
          setRegisterName(displayNameFromFirebase || "");
          // 회원가입 성공시 로그인 페이지 이동
          router.push("/Signin");
        })
        .catch((err) => {
          if (err.code === "auth/weak-password") {
            alert("비밀번호는 6글자 이상이어야 합니다.");
          } else if (err.code === "auth/invalid-email") {
            alert("이메일 형식을 지켜주세요");
          } else if (err.code === "auth/email-already-in-use") {
            alert("이미 가입되어 있는 계정입니다.");
          } else {
            alert("로그인에 실패 하였습니다.");
          }
        });
    },
    [registerEmail, registerName, regitserPassword]
  );

  return (
    <div>
      {/* Signup NavBar Part */}
      <StyledLogoBar>
        <Image
          src="/images/devwaylogo.png"
          alt="devway logo"
          width={170}
          height={44}
        />
      </StyledLogoBar>

      {/* Signup Container body */}
      <StyledSignUpDiv>
        <StyledLottieDIv>
          <LoginLottie lottieData={animationDatatwo} width={500} height={500} />
        </StyledLottieDIv>
        <StyledUserBorder>
          <StyledSignUpH3>회원가입</StyledSignUpH3>
          <form onSubmit={onSubmit}>
            <div>
              <CommonInputForm
                type="email"
                id="Email"
                onChange={onRegisterEmail}
                value={registerEmail}
                placeholder="Email"
              />
            </div>
            <div>
              <CommonInputForm
                type="password"
                id="Password"
                onChange={onRegisterPassword}
                value={regitserPassword}
                placeholder="Password"
              />
            </div>
            <div>
              <CommonInputForm
                type="text"
                id="Name"
                onChange={onRegisterName}
                value={registerName || ""}
                placeholder="Name"
              />
            </div>
            <CommonBtn type="submit" name="계정 만들기" />
          </form>
          <StyledAlreadyP>
            이미 계정이 있으신가요?
            <Link href="/Signin">
              <StyledAlreadySpan>로그인</StyledAlreadySpan>
            </Link>
          </StyledAlreadyP>
          <StyledSplitDiv>또는</StyledSplitDiv>
          <StyledSocialLoginDiv>
            <GoogleLogin />
            <GithubLogin />
          </StyledSocialLoginDiv>
        </StyledUserBorder>
      </StyledSignUpDiv>
    </div>
  );
}
export default Signup;

const StyledLogoBar = styled.div`
  width: 88rem;
  height: 5.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledSignUpDiv = styled.div`
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

const StyledAlreadyP = styled.p`
  margin-top: 1.25rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.fontSize12};
  color: ${({ theme }) => theme.color.black};
`;

const StyledAlreadySpan = styled.span`
  margin-left: 0.625rem;
  color: ${({ theme }) => theme.color.brandColorMedium};
  transform: all 0.3s;
  :hover {
    color: ${({ theme }) => theme.color.branchColorDeep};
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
