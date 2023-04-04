import React from "react";
import Image from "next/image";
import LoginLottie from "src/Components/Common/LoginLottie";
import animationData from "src/assets/lottieJSON/collabo.json";
import styled from "styled-components";

function Signin() {
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
            <LoginLottie lottieData={animationData} width={600} height={580} />
          </StyledLottieDIv>
          <div>
            <StyledH3>로그인</StyledH3>
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
