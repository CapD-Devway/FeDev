import React from "react";
import Lottie, { Options } from "react-lottie";
import styled, { css } from "styled-components";

interface ILoginlottieProps {
  lottieData: object;
  width?: number;
  height?: number;
}

function LoginLottie({ width, height, lottieData }: ILoginlottieProps) {
  const defaultOption: Options = {
    animationData: lottieData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledWrapper>
      <Lottie
        options={defaultOption}
        width={width}
        height={height}
        isClickToPauseDisabled
      />
      <StyledTextSpan>
        <StyledH1>Mate. Make. Together.</StyledH1>
        <StyledP>로그인 또는 계정 만들기</StyledP>
      </StyledTextSpan>
    </StyledWrapper>
  );
}

export default LoginLottie;

const media = {
  desktop: (styles: string) => css`
    @media only screen and (max-width: 1024px) {
      ${styles}
    }
  `,
  tablet: (styles: string) => css`
    @media only screen and (min-width: 576px) and (max-width: 767px) {
      ${styles}
    }
  `,
  mobile: (styles: string) => css`
    @media only screen and (max-width: 575px) {
      ${styles}
    }
  `,
};

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 3.125rem;
  ${media.desktop(`
    min-width: 1024px;
    display: none;
  `)}

  ${media.tablet(`
    min-width: 768px;
    display: none;
  `)}

  ${media.mobile(`
    min-width: 576px;
    display: none;
  `)}
`;

const StyledTextSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 40%;
  left: 26%;
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.fontSize32};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.color.black};
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.color.black};
`;
